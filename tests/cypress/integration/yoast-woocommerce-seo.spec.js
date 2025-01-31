// <reference types="Cypress" />

describe('Yoast WooCommerce SEO Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/plugins/yoast-woocommerce-seo');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.get('.section-logo img').scrollIntoView().should('be.visible');
	});

	// it('Is Accessible', () => {
	// 	cy.wait(1500);
	// 	cy.checkA11y('.bwa-route-contents');
	// });

});
