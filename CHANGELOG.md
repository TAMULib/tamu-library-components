# Changelog

## [2.0.1] - 09-15-22
### Resolves

- Mobile Mega menu not expanding. (#334)
- Tamu Library Components should define a consistent link color by theme. (#385)
- The mobile menu slide out tray continues to allow links to be clicked on when closed. (#389)
- TL components should implement suppressTopNavList in 1x. (#394)
- Verify that TAMU Library Components is showing icons in the mobile menu. (#395)
- Some browsers, mobile menu expand/collapse icons does not appear all the way to the right. (#407)
- ADA - Issue 3: Missing Skip navigation link. (#424)
- Build components with Node 16 or greater. (#429)
- Update deprecated karma coverage package. (TAMULib/weaver-components#306)
- ADA - Buttons missing label and expand/collapse notification. (#423)
- Issue 4: Focus indicator missing (#425)

## [2.0.0] - 10-29-21
### Resolves

- tl- and wvre- Tabs should allow form elements. (#321)
- Refactor components for consistency. (#325)
- Fix npm link scripts between weaver-components and tamu-library-components. (#329)
- The TAMUWYSIWYGComponent should be extended to support initial content and saving of the data. (#335)
- Tamu Components should support the TL Dropdown within the TL Header Bottom Nav, with mobile support. (#336)
- TAMU Header should support the suppression of the top navigation links, both complete suppression and discriminate. (#337)
- Tamu Library Components should extract CSS to avoid the removal of deprecated style strategy. (#339)
- TL Components should utilize the latest version of Weaver Content projection. (#348)
- TL-Header and TL-MegaMenu should not be circularly referent. (#352)
- TL-Components should compile using the Ivy partial compiler option. (#353)
- Navigation subsections not expanding in mobile view (#367)
- In some browsers at some sizes, the footer will shudder/flicker due to loop involving scrollbar (#369)
- The TL Tabs should support the toggling and coloring of the top border of tabs. (#361)
- TL Card Should Support Expand/Collapse on Card Header click. (#375)
- Mega Menu action button is not being themed maroon. (#368)

## [1.11.0] - 06-04-21
### Resolves

- Tl components should offer the same build script support offered by Weaver Components (#309)
- Tl components should build without warnings (#310)
- Lighthouse requires node 12. (#315)

## [1.10.0] - 05-12-21
### Resolves

- ngRX actions not firing on the tl-wysiwyg component. (#285)
- Tl Header Should Utilize the weaver default variant instead of button. (#300)
- Tl Footer Should Utilize the weaver default variant instead of button. (#301)
- TL Header should use brand-secondary-neutral for the bottom nav background. (#306)

## [1.9.1] - 05-05-21
### Resolves

- Sets bottom nav background color to secondaryNeutral.

## [1.9.0] - 04-23-21
### Resolves

- TAMU Library Component should expose the weaver modal component. (#270)
- tl-modal should support the toggling of the modal launch button. (#290)
- TL Components should offer a tl-themes components.(#281)
- TLThemes should provide a csrrs theme.(#282)
- The TL Header should support re-theming via the themes supplied by the TL Themes component.(#283)
- TL-components mega menu dropdown should have a longer debounce on hover before triggering the open.(#284)
- The TL Footer should support re-theming via the themes supplied by the TL Themes component.(#286)

## [1.8.0] - 03-31-21
### Resolves

- The tl-header display not accurate on iPad. (#256)
- Tamu Library Components should expose the Weaver WYSIWYG component. (#271)
- Links in the information for dropdown are causing 404s. (#273)
- The mouse hover reaction time for the menu should be set to 0.5s. (#275)

## [1.7.3] - 1-14-21
### Resolves

- Converts Hours dropdown into a link

## [1.7.2] - 1-5-21
### Resolves

- Patches iPhone bug

## [1.7.0] - 12-18-20
### Resolves

- 'Give to the Libraries' item to be added in the bottom navidgation section in tl-header (#254)
- TL Components should utilize externals to reduce bundle size. (#117)
- Remove scss, rendered unnecessary by the recent theme features. (#276)
- Remove scss, rendered unnecessary by the recent theme features. (#239)
- Library hours disappear when moving from mobile layout to desktop layout. This also happens with the icons in the help dropdown. (#238)
- Dropdown buttons and buttons exhibit different theming behavior (#241)
- TL Components Documentation and Report pages should use theme-variant as opposed to theme-varient (#245)
- TL Usage Documentation should use wvr ud scripts (#236)
- FIx Mega Menu resize test. (#240)

## [1.6.0] - 11-20-20
### Resolves

- Updated to Angular 11
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
