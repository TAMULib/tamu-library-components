import { Component, ViewEncapsulation } from '@angular/core';
import { Link } from '../shared/link';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-drop-down-element',
  templateUrl: './tl-drop-down.component.html',
  styleUrls: ['./tl-drop-down.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TlDropDownComponent extends TamuAbstractBaseComponent {

  hours = `
          <div class="dropdown-menu mega-dropdown-menu row" style="display: none;">
            <div style="text-align:center; padding:12px;">
              <p>
                <strong style="font-size:14px;">While most of our buildings are closed to the public access, we still have robust
                  <a href="https://tamu.libguides.com/c.php?g=1016445">virtual services</a>.
                </strong>
              </p>
              <p>The OAL Lab in BLCC is open 8am - 7pm.<br>BLCC is offering only virtual services.</p>
              <a class="btn btn-info" href="https://tamu.libguides.com/c.php?g=1016445">View all Virtual Services</a>
            </div>
          </div>`;

  // Libraries Section
  librariesLinksOuter: Array<Link> = [
    { href: 'https://blcc.library.tamu.edu/', value: 'Business Library &amp; Collaboration Commons' },
    { href: 'https://cushing.library.tamu.edu', value: 'Cushing Memorial Library &amp; Archives' },
    { href: 'https://msl.library.tamu.edu', value: 'Medical Sciences Library' },
    { href: 'https://psel.library.tamu.edu', value: 'Policy Sciences &amp; Economics Library' },
    { href: 'https://evans.library.tamu.edu', value: 'Sterling C. Evans Library &amp; Annex' }
  ];

  librariesLinksInner: Array<Link> = [
    { href: 'https://library.tamu.edu/about/directions/business-library.html', value: 'Parking Directions / 979-845-2111' },
    { href: 'https://library.tamu.edu/about/directions/cushing-library.html', value: 'Parking Directions / 979-845-1951' },
    { href: 'https://library.tamu.edu/about/directions/medical-sciences-library.html', value: 'Parking Directions / 979-845-7428' },
    // tslint:disable-next-line: max-line-length
    { href: 'https://library.tamu.edu/about/directions/policy-sciences-economics-library.html', value: 'Parking Directions / 979-862-3544' },
    { href: 'https://library.tamu.edu/about/directions/evans-library-annex.html', value: 'Parking Directions / 979-845-3731' }
  ];

  // InformationFor Section
  informationForLinks: Array<Link> = [
    { href: 'https://library.tamu.edu/faculty_info/index.html', value: 'Information for Faculty' },
    { href: 'https://library.tamu.edu/grad_info/index.html', value: 'Graduate Student Resources' },
    { href: 'https://library.tamu.edu/undergrad_info/index.html', value: 'Undergraduate Student Resources' },
    { href: 'https://library.tamu.edu/services/accessibility.html', value: 'Services for Individuals with Disabilities' },
    { href: 'https://tamu.libguides.com/c.php?g=949823', value: 'Students at Satellite Campuses' },
    { href: 'http://tamu.libguides.com/c.php?g=586101&amp;p=4048709', value: 'School Visitors' },
    { href: 'https://library.tamu.edu/about/other_patrons.html', value: 'Other Library Guests (Non-TAMU Affiliates)' }
  ];

  // Help section
  helpAskUslinks: Array<Link> = [
    { href: 'http://askus.library.tamu.edu/', value: 'Help' }
  ];

  askUsLogoSrc = 'https://library.tamu.edu/assets/images/askus.png';

  helpAskUslinks2: Array<Link> = [
    { href: 'http://askus.library.tamu.edu/', value: 'Chat with us' },
    { href: 'https://library.tamu.edu/about/phone.html', value: 'Call us' },
    { href: 'sms:9792561091', value: 'Text us @ 979-256-1091' },
    { href: 'https://askus.library.tamu.edu/contact/index', value: 'Email us' },
    { href: 'http://askus.library.tamu.edu/', value: 'FAQs' },
    { href: 'https://askus.library.tamu.edu/contact/index', value: 'Report a problem' }
  ];

}
