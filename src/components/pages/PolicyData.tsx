import { FormattedMessage } from "react-intl";
import { Translate } from "../UI/molecules/Translate";
import { PolicyMenu } from "../UI/atoms/PolicyMenu";

import "../../styles/policy.scss";
import ReactMarkdown from "react-markdown";

export const PolicyData = () => {
  return (
    <div className="policy-Big">
      <Translate />
      <div className="policyContent">
        <PolicyMenu />
        <div className="policyContainer" id="policyContainerID">
          <FormattedMessage id="policy-Title">
            {(message) => (
              <ReactMarkdown className="policyTitle">{`${message}`}</ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Introduction">
            <FormattedMessage id="policy-Introduction-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`1. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Introduction">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Definition">
            <FormattedMessage id="policy-Definition-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`2. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Definition">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Values">
            <FormattedMessage id="policy-Values-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`3. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Values">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Treatment">
            <FormattedMessage id="policy-Treatment-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`4. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Treatment-firstSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**4.1** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Treatment-firstDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Treatment-secondSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**4.2** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Treatment-secondDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Duties">
            <FormattedMessage id="policy-Duties-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`5. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Duties-firstSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**5.1** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Duties-firstDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Duties-secondSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**5.2** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Duties-secondDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <div id="Rights">
            <FormattedMessage id="policy-Rights-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`6. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Rights-firstSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**6.1** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Rights-firstDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Rights-secondSubtitle">
            {(message) => (
              <ReactMarkdown className="policySelectSubTitle">
                {`**6.2** ${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>

          <FormattedMessage id="policy-Rights-secondDescription">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="ResponsableArea">
            <FormattedMessage id="policy-ResponsableArea-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`7. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-ResponsableArea">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="TitularProcedure">
            <FormattedMessage id="policy-TitularProcedure-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`8. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-TitularProcedure">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
          <div id="Update">
            <FormattedMessage id="policy-Update-title">
              {(message) => (
                <ReactMarkdown className="policySelectTitle">
                  {`9. ${message}`}
                </ReactMarkdown>
              )}
            </FormattedMessage>
          </div>

          <FormattedMessage id="policy-Update">
            {(message) => (
              <ReactMarkdown className="policySelectBody">
                {`${message}`}
              </ReactMarkdown>
            )}
          </FormattedMessage>
        </div>
      </div>
    </div>
  );
};
