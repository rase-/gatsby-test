import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site. This is a build! VERSION NETLIFY</p>
    <p>Welcome to your new Gatsby site. Again.</p>
    <p>{process.env.GATSBY_TEST_VAR}</p>
    <p>Now go build something great. 1</p>
    <p>Now go build something great. 2</p>
    <p>Now go build something great. 3</p>
    <p>Now go build something great. 4</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
