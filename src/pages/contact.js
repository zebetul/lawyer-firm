// src/pages/contact.js
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact({ data }) {
  const { phone, address, email, googleMapsUrl, googleMapsEmbedUrl } =
    data.site.siteMetadata.contact;

  return (
    <Layout>
      <div className="contact-page-container w-full flex flex-col p-2">
        <h1 className="contact-page-title mx-auto border-b-2 pb-2 border-accent mb-20 mt-20 text-center text-xl md:text-4xl text-secondary font-serif">
          CONTACT
        </h1>

        <div className="contacts-container mb-20 flex flex-col md:flex-row gap-10 text-secondary">
          <div className="contact-form-container mx-auto flex-1 w-72 flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-gray-100 rounded-lg">
            <a
              className="contact_phone"
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:${phone}`}
            >
              <PiPhoneFill className="text-accent" size={50} />
            </a>

            <div className="contact-form text-center md:text-start">
              <h2 className="mb-1 font-serif md:text-xl font-bold">TELEFON</h2>

              <p className="mb-1">{phone}</p>
            </div>
          </div>

          <div className="contact-form-container mx-auto flex-1 w-72 flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-gray-100 rounded-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
              className="contact_email"
            >
              <MdEmail className="text-accent" size={50} />
            </a>

            <div className="contact-form text-center md:text-start">
              <h2 className="mb-1 font-serif md:text-xl font-bold">EMAIL</h2>

              <p className="mb-1">{email}</p>
            </div>
          </div>

          <div className="contact-form-container mx-auto flex-1 w-72 flex flex-col md:flex-row items-center md:items-start gap-3 p-4 bg-gray-100 rounded-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={googleMapsUrl}
              className="contact_address"
            >
              <MdLocationOn className="text-accent" size={50} />
            </a>

            <div className="contact-form text-center md:text-start">
              <h2 className="mb-1 font-serif md:text-xl font-bold">ADRESĂ</h2>

              <p className="mb-1">{address}</p>
            </div>
          </div>
        </div>

        <div className="google-map">
          <iframe
            title="Google Map"
            className="rounded-lg mb-32 border-0 w-full"
            src={googleMapsEmbedUrl}
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          address
          phone
          email
          googleMapsUrl
          googleMapsEmbedUrl
        }
      }
    }
  }
`;
