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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/TLCoreModule.html" data-type="entity-link" >TLCoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TLSharedModule.html" data-type="entity-link" >TLSharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TLSharedModule-4bbf79461d3d11ab6577abebec65bf08a12637c26a5947857cb26db723325bf5863e7017e7a6ca9ecfe71a98de1b86428a81619438e3879140afc77546474863"' : 'data-target="#xs-components-links-module-TLSharedModule-4bbf79461d3d11ab6577abebec65bf08a12637c26a5947857cb26db723325bf5863e7017e7a6ca9ecfe71a98de1b86428a81619438e3879140afc77546474863"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TLSharedModule-4bbf79461d3d11ab6577abebec65bf08a12637c26a5947857cb26db723325bf5863e7017e7a6ca9ecfe71a98de1b86428a81619438e3879140afc77546474863"' :
                                            'id="xs-components-links-module-TLSharedModule-4bbf79461d3d11ab6577abebec65bf08a12637c26a5947857cb26db723325bf5863e7017e7a6ca9ecfe71a98de1b86428a81619438e3879140afc77546474863"' }>
                                            <li class="link">
                                                <a href="components/TlAlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlDropDownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlDropDownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlDropDownMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlDropDownMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlDropDownMenuSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlDropDownMenuSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlItWorksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlItWorksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlMegaMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlMegaMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlMegaMenuSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlMegaMenuSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlNavListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlNavListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlThemesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlThemesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TlWysiwygComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TlWysiwygComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/TamuAbstractBaseComponent.html" data-type="entity-link" >TamuAbstractBaseComponent</a>
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
                                <a href="interfaces/Link.html" data-type="entity-link" >Link</a>
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