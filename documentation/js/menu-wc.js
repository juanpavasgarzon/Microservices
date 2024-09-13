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
                    <a href="index.html" data-type="index-link">microservices documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' : 'data-bs-target="#xs-controllers-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' :
                                            'id="xs-controllers-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' }>
                                            <li class="link">
                                                <a href="controllers/GatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' : 'data-bs-target="#xs-injectables-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' :
                                        'id="xs-injectables-links-module-GatewayModule-b4a1a6c3b95ac612254db73a76025883d675fa0b47bbb37ee33ea18e7044d8f002bc6e46e4a6b0dd1bb15414d046aec36fd08c7e08610d4241e5b1bc5c72ee13"' }>
                                        <li class="link">
                                            <a href="injectables/GatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' : 'data-bs-target="#xs-controllers-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' :
                                            'id="xs-controllers-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' }>
                                            <li class="link">
                                                <a href="controllers/InventoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' : 'data-bs-target="#xs-injectables-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' :
                                        'id="xs-injectables-links-module-InventoryModule-4a7d57a365d3bbc16373f68cc63fbda92e87e33efd3b798101daecd0e3ea3c802a9d690f16c97111608590592303ba6cf5699feb4425ad87ba63bd06034f2b93"' }>
                                        <li class="link">
                                            <a href="injectables/InventoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RabbitModule.html" data-type="entity-link" >RabbitModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RabbitModule-f2422f6932f2e4b65aa093dc50f27d7cb26b0aa28a6b21111f81f1ea2f3ba41464c40dadbc88b2191ddc067434278f52c9ddd9d8c679b98118e2d34dd0704793"' : 'data-bs-target="#xs-injectables-links-module-RabbitModule-f2422f6932f2e4b65aa093dc50f27d7cb26b0aa28a6b21111f81f1ea2f3ba41464c40dadbc88b2191ddc067434278f52c9ddd9d8c679b98118e2d34dd0704793"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RabbitModule-f2422f6932f2e4b65aa093dc50f27d7cb26b0aa28a6b21111f81f1ea2f3ba41464c40dadbc88b2191ddc067434278f52c9ddd9d8c679b98118e2d34dd0704793"' :
                                        'id="xs-injectables-links-module-RabbitModule-f2422f6932f2e4b65aa093dc50f27d7cb26b0aa28a6b21111f81f1ea2f3ba41464c40dadbc88b2191ddc067434278f52c9ddd9d8c679b98118e2d34dd0704793"' }>
                                        <li class="link">
                                            <a href="injectables/RabbitAccessor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RabbitAccessor</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecurityModule.html" data-type="entity-link" >SecurityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' : 'data-bs-target="#xs-controllers-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' :
                                            'id="xs-controllers-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' }>
                                            <li class="link">
                                                <a href="controllers/SecurityController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' : 'data-bs-target="#xs-injectables-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' :
                                        'id="xs-injectables-links-module-SecurityModule-1aa67d69de30ba38a7965dd5c18301b26b81b664f0f69f6bfbae1f9314903559616695781c939cfaa6e1d85a5510d1ccef36c32f545e72035b3443160362933a"' }>
                                        <li class="link">
                                            <a href="injectables/SecurityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecurityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StockModule.html" data-type="entity-link" >StockModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' : 'data-bs-target="#xs-controllers-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' :
                                            'id="xs-controllers-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' }>
                                            <li class="link">
                                                <a href="controllers/StockController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StockController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' : 'data-bs-target="#xs-injectables-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' :
                                        'id="xs-injectables-links-module-StockModule-348dad49c1699772f7fd4ea690be6c48df166677809fb682de1674a7085fc0d171e956d73d01967276f282813cb925c4e5468259a7d3c12304f4f5140f453b8e"' }>
                                        <li class="link">
                                            <a href="injectables/StockService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StockService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/RabbitAccessor.html" data-type="entity-link" >RabbitAccessor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});