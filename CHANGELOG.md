# Changelog

## [1.6.0] - 11-20-20
### Resolves

- Tamu components should bring in all icons on build, from an icon manifest. (#152)
- config.json doesn't load inside iframe. (#205)
- Handlebars templating for retrieved data should be supported by tl components. (#221)
- TL Mega Menu should remain open when clicked. (#224)
- TL Components and should support an extensible list of branded colors. (Primary, secondary, danger, warning... etc). (#225)
- Refactor color usage across tl components to use branded color list, and include fallback support. (#226)

## [1.5.0] - 11-02-20
### Resolves

- The last nav-list-item of tamu-header component is not visible on Firefox (mobile view). (#197)
- TL Components should provide a branded tl-card component. (#200)
- TL Components should provide a branded tl-panel component. (#201)
- TL Components should expose wvr-usage docs. (#202)
- TL Components should be refactored to use the wvre slector and the wvr-*-component selector. (#204)
- Lato font not being read into mega menu component. (#217)
- The tl-header should use the configured asset path for the header logo. (#220)
- Remove drop shadow from mega menu section titles. (#223)

## [1.4.2] - 10-08-20
### Resolves

- Updated travis deploy branch

## [1.4.1] - 10-08-20
### Resolves

- Text wrap on mega menu fixed (#188)

## [1.4.0] - 10-08-20
### Resolves

- TAMU library components should provide an alert component. (#181)
- There should be TAMU branded designs for alerts. (#182)
- Tl Components should offer a tl-tabs wrapper around the wvr-tabs component. (#183)
- The mega menu within the mobile menu should work on firefox and safari. (#186)
- The section items in the mega menu should not have bottom borders. (#187)
- The text-wrap property of the mega menu causes an undesirable flicker when expanding collapsing. (#188)
- Ensure tl component compatibility with the new wvr list template. (#194)

## [1.3.0] - 09-24-20
### Resolves

- Header styles should match design documents. (bug) (#150)
- Header should be functional and display properly on page load. (bug) (#151)
- The Mega menu should only open downward. (#154)
- The Mega Menu dropdown chevron should maintain its rotation state as long as the dropdown is open. (bug) (#155)
- The Mega Menu should provide a tl-mega-menu-content element. (#156)
- A mega menu should conditionally display in mobile view. (#157)
- The Mega Menu should allow for the override of the text on the "View All" Button. (#158)
- The Mega Menu suppress the "View All" button if an href is not provided. (#159)
- The Mega Menu should be able to be included in the Header's bottom navigation. (#160)
- Hours Content should be updated. (#161)
- The hover state for text in the Header Components' bottom navigation should be whit. (#179)
- Non Mega Menu Bottom Nav Items should appear with the same styles as mega menu, - the rotating "X", when in mobile. (#180)

## [1.1.0] - 07-16-20
### Resolves

- There should be a complete list of all needed TAMU library components. (#23)
- TL Components should provide a tl-button component. (#63)
- Fix console error when using wvr-dropdown. (#94)
- tl-dropdown toggle-on="click" needs revision. (#104)
- Tl-dropdown should support wvr-button. (#106)
- Font-size in tl-header needs update. (#109)
- TL Header Logo should have a link to library.tamu.edu. (#111)
- The hover color of the text for dropdowns in the top nav should be black. (#118)

## [1.0.1] - 07-16-20
### Resolves

- Update CDN in tamu-component (#98)
- TL Components should have branded modal designs (#89)
- Fix tl-dropdown component : z-index overlaps (#95)

## [1.0.0] - 06-11-20
### Resolves

- TL Components should have a `tl-dropdown` (#61)
- TL Components should have branded button designs (#62)
- TL Components should have CI hooks for lighthouse  (#64)
- tl-header should add url for addressing attribute page-title-url (#66)
- Utilize tl-drop-down in tl-header (#82)

## [0.0.5] - 05-14-20
### Resolves

- Tl-header should have a mobile and tablet layout design (#20)
- Tamu-library-components should have specified accessibility design standards (#21)
- Tamu-library-components should have a drop down component design (#22)
- The tl-navlist component should utilize Shadowdom encapsulation (#47)
- TL Header should have border divisions between top-nav links (#50)
- TL Header should have border divisions between top-nav and title-row (#51)
- TL Components should optionally allow the inheritance of font styling from global styles (#56)
