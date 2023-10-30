import { FC } from "react";

interface QuestionProps {}

const Question: FC<QuestionProps> = ({}) => {
  return (
    <div className="col-lg-6">
      <div className="ps-xl-4">
        <h4 className="mt-0">Asked question befor buy ticket</h4>
        <p className="section__para">
          Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
          Vestibulum volutpat pretium libero. Cras id dui.
        </p>
        <div className="accordion custom--accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
              >
                Why AmaZoo?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
              >
                How to buy ticket in online?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
              >
                Upcoming Animals?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
              >
                Can I get help for an autistic child?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
              >
                Zoo opening time?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
