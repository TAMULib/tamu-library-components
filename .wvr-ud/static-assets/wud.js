let componentManifest = JSON.parse($('#expamples-manifest').html());
let editorElem = document.querySelector('#editor');
let previewElem = document.querySelector('#preview');
let desciptionElem = document.querySelector('#desciption');
let activeExampleNameElem = document.querySelector('#active-component-name');
let componentCollectionsList = document.querySelector('#component-collections');
let componentCollectionTemplate = document.querySelector('#component-collection-template');
let componentLinkTemplate = document.querySelector('#component-link-template');
let editor;
let scssEditor;
let sourceEditor;
let components = [];
let activeExample;
let setupPromise;

let setupEditor = () => {
  editor = ace.edit("editor");
  editor.getSession().setUseWorker(false);
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  let debounce;
  editor.getSession().on('change', function(e) {
    if(debounce) clearTimeout(debounce);
    document.querySelector("main").classList.add('loading');
    debounce = setTimeout(function() {
      if(activeExample.querySelector('snippet').rawHTML !== editor.getSession().getValue()) {
        activeExample.querySelector('snippet').rawHTML = editor.getSession().getValue();
        before = editor.selection.toJSON();
        loadExample(activeExample);
        editor.selection.fromJSON(before);
      }
      document.querySelector("main").classList.remove('loading');
    }, 500);
  });
  scssEditor = ace.edit("scss-editor");
  scssEditor.setOptions({
    readOnly: true,
    highlightActiveLine: false,
    highlightGutterLine: false,
    theme: 'ace/theme/monokai',
    mode: 'ace/mode/scss'
  });
  scssEditor.renderer.$cursorLayer.element.style.opacity=0;
  sourceEditor = ace.edit("source-editor");
  sourceEditor.setOptions({
    readOnly: true,
    highlightActiveLine: false,
    highlightGutterLine: false,
    theme: 'ace/theme/monokai',
    mode: 'ace/mode/typescript'
  });
  sourceEditor.renderer.$cursorLayer.element.style.opacity=0;
}

let setupComponentLinks = ()=>{
  setupPromise = new Promise((resolve, reject) => {
    let componentManifestKeys = Object.keys(componentManifest);
    interationCount = 0;
    componentManifestKeys.forEach(componentName=>{
      let componentUri = componentManifest[componentName];
      let xhr = new XMLHttpRequest();
      xhr.onload = function() {
        let examples = [];
        this.responseXML.querySelectorAll('example').forEach(example=>{
          examples.push(example);
        });
        components.push({
          name: componentName,
          examples: examples
        });
        interationCount++;
        if(interationCount===componentManifestKeys.length) {
          resolve();
        }
      }
      xhr.open( 'GET', componentUri );
      xhr.responseType = 'document';
      xhr.send();
    });
  });
  document.querySelector('.expand-collapse-all').addEventListener('click', e=>{
    e.preventDefault();
  
    e.currentTarget.classList.contains('open') ?
    $('.component-links').collapse('hide') :
    $('.component-links').collapse('show')
    e.currentTarget.classList.contains('open') ?
    e.currentTarget.classList.remove('open') :
    e.currentTarget.classList.add('open')
  });
}

let loadExample = (example) => {
  let snippet = example.querySelector('snippet').rawHTML;
  let desciption = example.querySelector('desciption').innerHTML;
  let componentScss = example.querySelector('component-scss').innerHTML;
  let componentSource = example.querySelector('component-source').innerHTML;
  document.querySelector('#copy-btn').setAttribute('data-clipboard-text', snippet);
  activeExampleNameElem.innerText = example.getAttribute('name');
  previewElem.innerHTML = snippet;
  desciptionElem.innerHTML = desciption;
  scssEditor.getSession().setValue(componentScss);
  sourceEditor.getSession().setValue(componentSource);
  editor.getSession().setValue(snippet);
};

let renderComponentLinks = componentsToRender => {
  componentsToRender.sort();
  componentsToRender.forEach(component=> {
    let componentCollectionClone = componentCollectionTemplate.content.cloneNode(true);
    let componentLinksElem = componentCollectionClone.querySelector('ul.component-links');
    let componentCollectionLink = componentCollectionClone.querySelector('.component-collection-link')
    componentCollectionClone.querySelector('.component-collection-name').innerText = component.name;
    componentCollectionLink.setAttribute('href', `#${component.name}`);
    $(document).on('show.bs.collapse hide.bs.collapse', componentCollectionLink, function (e) {
        let ccl = e.target.closest('.nav-item');
        e.type === 'hide' ?
        ccl.classList.add('closed') :
        ccl.classList.remove('closed');
    });
    componentCollectionClone.querySelector('.component-links').setAttribute('id', component.name);
    component.examples.forEach(example=>{
      let componentLinkTemplateClone = componentLinkTemplate.content.cloneNode(true);
      componentLinkTemplateClone.querySelector('a.nav-link').setAttribute('href', `#${example.getAttribute('name').replace(/\s/g,'')}`);
      componentLinkTemplateClone.querySelector('.component-link-name').innerText = example.getAttribute('name');
      componentLinkTemplateClone.querySelector('a.nav-link').addEventListener('click', function(e) {
        document.querySelectorAll('a.component-link').forEach(navLink=>navLink.classList.remove('active'));
        e.target.closest('a.component-link').classList.add('active');
        component.examples.forEach(example=>{
          if(example.getAttribute('name').trim()===e.target.innerText.trim()) {
            activeExample=example;
            activeExample.querySelector('snippet').rawHTML = activeExample.querySelector('snippet').innerHTML;
            loadExample(example);
          }
        });
      });
      componentLinksElem.appendChild(componentLinkTemplateClone);
      componentCollectionsList.appendChild(componentCollectionClone);
    });
  });
}

let loadInitialContent = () => {
  let currentUrl = document.URL;
  let urlParts   = currentUrl.split('#');
  let anchor = (urlParts.length > 1) ? urlParts[1] : null;
  if(anchor) {
    let activeComponentLink = document.querySelector(`a.nav-link[href='#${anchor}']`);
    $(activeComponentLink.closest('.component-links')).collapse('show');
    activeComponentLink.click();
  }
}

let setupClipboard = () => {
  $('button').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  function setTooltip(message) {
    $('button').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  function hideTooltip() {
    setTimeout(function() {
      $('button').tooltip('hide');
    }, 1000);
  }
  var clipboard = new ClipboardJS('#copy-btn');
  clipboard.on('success', function(e) {
    setTooltip('Copied!');
    hideTooltip();
  });
  clipboard.on('error', function(e) {
    setTooltip('Failed!');
    hideTooltip();
  });
}

// Setup Tabs
const setupTabs = () => {
  // Tab funcitonality
  $('#tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
    loadExample(activeExample, true);
  });
}

// Setup Search
const setUpSearch = () => {
  let search = searchQuery => {
    renderComponentLinks(components.filter(c=>{
      match = false;
      c.examples.forEach(e=>{
        if(!match)
          match = e.getAttribute('name').toLowerCase().includes(searchQuery.toLowerCase());
      });
      return match;
    }));
    if($('.component-links').length !== components.length) {
      $('.component-links').collapse('show');
    } else {
      $('.component-links').collapse('hide');
      loadInitialContent();
    }
  }

  $('.search').on("keyup", $.debounce(500, e=>{
    componentCollectionsList.innerHTML = '';
    search(e.target.value);
  }));
}

setupEditor();
setupComponentLinks();
setupClipboard();
setupTabs();
setUpSearch();

setupPromise.then(()=>{
  renderComponentLinks(components);
  loadInitialContent();
});