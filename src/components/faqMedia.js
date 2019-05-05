import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Collapse, Button } from 'reactstrap';

import faqData from './faqsData';

export default class FAQMobile extends Component {
  state = {
    faqs: faqData
  };

  render() {
    const { faqs } = this.state;
    return (
      <div className="margin-center container-fluid">
        <h1 className="faq-header">FAQ</h1>
        <p className="text-center bg-darkgrey speech">Click to Expand</p>
        {
          faqs.map( (faq, i) =>
          <div>
            <div className="w-600p margin-center container-fluid faq-content">
              <p className="font-weight-bold branding-orange m-b-6"> {faq.question} ></p>
              <Collapse id={`faq-${i}`}>
                {ReactHtmlParser(faq.questionText)}
              </Collapse>
            </div>
          </div>
          )
        }
      </div>
    );
  }
}
