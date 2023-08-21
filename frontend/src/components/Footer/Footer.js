import React from 'react';

const Footer = () => {
    return (
        <div className="page-width">
            <div className="flex-footer">
                <div className="flex-footer__item flex-footer__item--menu">
                    <ul className="site-footer__linklist">
                        <li className="site-footer__linklist-item h6"><a href="/">Home</a></li>
                        <li className="site-footer__linklist-item h6"><a href="/collections">Our Products</a></li>
                        <li className="site-footer__linklist-item h6"><a href="/pages/where-to-buy">Where to Buy</a></li>
                        <li className="site-footer__linklist-item h6"><a href="/pages/delivery-returns">Delivery &amp; Returns</a></li>
                        <li className="site-footer__linklist-item h6"><a href="/pages/contact-narrow-gate-foods">Contact Narrow Gate</a></li>
                    </ul>
                </div>
                <div className="flex-footer__item flex-footer__item--newsletter">
                    <div className="site-footer__newsletter">
                        <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" className="contact-form">
                            <input type="hidden" name="form_type" value="customer" />
                            <input type="hidden" name="utf8" value="✓" />
                            <input type="hidden" name="contact[tags]" value="newsletter" />
                            <label for="NewsletterEmail" className="site-footer__newsletter-label">Sign up for updates</label>
                            <div className="input-group--underline">
                                <input type="email" value="" placeholder="My email address" name="contact[email]" id="NewsletterEmail" className="input-group__field site-footer__newsletter-input" aria-label="My email address" autocorrect="off" autocapitalize="none" />
                                <div className="input-group__btn">
                                    <input type="submit" className="btn btn--clear" value="Ok" name="subscribe" id="Subscribe" />
                                </div>
                            </div>
                            <div className="site-footer__newsletter-message" aria-role="alert"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="site-footer__social-icons flex-footer__item--one-third">
                    <div className="social-links">
                        <ul className="list--inline">
                            <li className="social-links__icon">
                                <a target="_blank" href="https://www.facebook.com/NarrowGateFoods/" title="Narrow Gate Foods on Facebook" tabindex="-1">
                                    {/* Facebook SVG Icon */}
                                </a>
                            </li>
                            <li className="social-links__icon">
                                <a target="_blank" href="https://www.instagram.com/narrowgatefoods/" title="Narrow Gate Foods on Instagram" tabindex="-1">
                                    {/* Instagram SVG Icon */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="site-footer__copyright flex-footer__item--one-third">
                    <small>Copyright © 2023, <a href="/" title="">Narrow Gate Foods</a>.</small>
                    <small className="site-footer__powered-by"><a target="_blank" rel="nofollow" href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore">Powered by Shopify</a></small><br />
                    <small><a href="//narrowgatefoods.com/pages/privacy-policy">Privacy Policy</a></small>&nbsp;&nbsp;
                    <small><a href="//narrowgatefoods.com/pages/terms-conditions">Terms &amp; Conditions</a></small>
                </div>
                <div className="site-footer__payment-icons flex-footer__item--one-third">
                    <ul className="payment-icons list--inline">
                        {/* Payment Icons */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
