import { useTranslation } from "react-i18next";
import "./RawSolution.css";

export type RawSolutionType = {
  readonly edgeSolution: string;
  readonly cornerSolution: string;
};

type RawSolutionProps = {
  rawSolution: RawSolutionType | null;
};

function RawSolution({ rawSolution }: RawSolutionProps) {
  const { t } = useTranslation();
  
  if (!rawSolution) return null;

  return (
    <div className="raw-solution">
      <div className="raw-solution__header">
        <div className="raw-solution__status-dot"></div>
        <h3 className="raw-solution__title">{t('rawSolution.title')}</h3>
      </div>

      <div className="raw-solution__content">
        <div className="raw-solution__section">
          <div className="raw-solution__section-header">
            <div className="raw-solution__dot raw-solution__dot--blue"></div>
            <span className="raw-solution__section-label">{t('rawSolution.edges')}</span>
          </div>
          <div className="raw-solution__code-block raw-solution__code-block--blue">
            <code className="raw-solution__code">
              {rawSolution.edgeSolution}
            </code>
          </div>
        </div>

        <div className="raw-solution__section">
          <div className="raw-solution__section-header">
            <div className="raw-solution__dot raw-solution__dot--orange"></div>
            <span className="raw-solution__section-label">{t('rawSolution.corners')}</span>
          </div>
          <div className="raw-solution__code-block raw-solution__code-block--orange">
            <code className="raw-solution__code">
              {rawSolution.cornerSolution}
            </code>
          </div>
        </div>
      </div>

      <div className="raw-solution__corner-accent"></div>
    </div>
  );
}

export default RawSolution;
