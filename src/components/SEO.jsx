import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      {/* Judul Halaman */}
      <title>{title}</title>
      
      {/* Meta Description */}
      <meta name="description" content={description} />
      
      {/* Meta Robot agar mesin pencari mengindeks halaman ini */}
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph (Facebook/WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;