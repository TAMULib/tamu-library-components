'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tamu-library-components documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/TamuLibModule.html" data-type="entity-link">TamuLibModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TamuLibModule-f45c5fa6eb0a54f2c6cf6e958ed8fc62"' : 'data-target="#xs-components-links-module-TamuLibModule-f45c5fa6eb0a54f2c6cf6e958ed8fc62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TamuLibModule-f45c5fa6eb0a54f2c6cf6e958ed8fc62"' :
                                            'id="xs-components-links-module-TamuLibModule-f45c5fa6eb0a54f2c6cf6e958ed8fc62"' }>
                                            <li class="link">
                                                <a href="components/TamuFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TamuFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TamuHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TamuHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TamuItWorksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TamuItWorksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TamuNavListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TamuNavListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlAlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlDropDownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlDropDownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlMegaMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlMegaMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlMegaMenuSectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlMegaMenuSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlTabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TlTabsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link">Link</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});