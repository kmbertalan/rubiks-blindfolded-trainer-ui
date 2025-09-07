import { useTranslation } from "react-i18next";
import "./HowToPage.css";

function HowToPage() {
  const { t } = useTranslation();

  return (
    <div className="how-to-page">
      <div className="how-to-page__content">
        <h3>{t('howTo.title')}</h3>
        <div className="how-to-page__info-box">
          <p className="how-to-page__info-text">
            {t('howTo.welcomeText')}
            <a
              href="https://cuberoot.me/wp-content/uploads/2019/02/502-3BLD-OP.pdf"
              target="_blank"
            >
              {t('howTo.oldPochmannMethod')}
            </a>
            .
            <ul className="how-to-page__info-list">
              <li>
                {t('howTo.edgeBuffer')}
              </li>
              <li>{t('howTo.cornerBuffer')}</li>
            </ul>
            <b>
              {t('howTo.validationText')}
            </b>
          </p>
        </div>
        <div className="how-to-page__images-container">
          <img src="/edge.png" alt={t('howTo.altTexts.edge')} className="how-to-page__image" />
          <img src="/corner.png" alt={t('howTo.altTexts.corner')} className="how-to-page__image" />
        </div>
        <div className="how-to-page__bottom-info">
          <p className="how-to-page__bottom-text">{t('howTo.howItWorks')}</p>
          <ol className="how-to-page__steps-list">
            <li>
              <strong>{t('howTo.steps.scramble.title')}</strong> {t('howTo.steps.scramble.description')}
            </li>
            <li>
              <strong>{t('howTo.steps.orientation.title')}</strong> {t('howTo.steps.orientation.description')}
            </li>
            <li>
              <strong>{t('howTo.steps.enterSolution.title')}</strong> {t('howTo.steps.enterSolution.description')}
            </li>
            <li>
              <strong>{t('howTo.steps.cubes.title')}</strong> {t('howTo.steps.cubes.description')}
            </li>
            <li>
              <strong>{t('howTo.steps.currentSolution.title')}</strong> {t('howTo.steps.currentSolution.description')}
            </li>
          </ol>
        </div>
      </div>

      <div className="how-to-page__screenshot-container">
        <img
          src="/screenshot_with_numbers.png"
          alt={t('howTo.altTexts.screenshot')}
          className="how-to-page__screenshot"
        />
      </div>
    </div>
  );
}

export default HowToPage;
