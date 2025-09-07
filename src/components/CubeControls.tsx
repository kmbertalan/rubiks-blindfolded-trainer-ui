import { useTranslation } from "react-i18next";
import CubeViewer from "./CubeViewer";
import "./CubeControls.css";

type CubeControlsProps = {
  scramble: string;
  algorithm: string;
  orientation: string;
  setShowScrambleModal: (input: boolean) => void;
  setShowSolutionModal: (input: boolean) => void;
  resetCube: VoidFunction;
};

function CubeControls({
  scramble,
  setShowScrambleModal,
  setShowSolutionModal,
  resetCube,
  algorithm,
  orientation,
}: CubeControlsProps) {
  const { t } = useTranslation();

  return (
    <>
      <button
        onClick={(e) => {
          setShowScrambleModal(true);
          (e.target as HTMLButtonElement).blur();
        }}
      >
        {t('trainer.getScramble')}
      </button>
      <button
        className="cube-controls__button--spaced"
        onClick={(e) => {
          setShowSolutionModal(true);
          (e.target as HTMLButtonElement).blur();
        }}
        disabled={!scramble}
      >
        {t('trainer.enterSolution')}
      </button>
      <button
        className="cube-controls__button--spaced"
        onClick={(e) => {
          resetCube();
          (e.target as HTMLButtonElement).blur();
        }}
      >
        {t('trainer.resetCube')}
      </button>
      <p>
        {t('trainer.currentScramble')} <b>{scramble}</b>
      </p>
      <div className="cube-controls__cubes-container">
        <div>
          <b className="cube-controls__cube-label">{t('trainer.scrambleLabel')}</b>
          <CubeViewer algorithm={`${scramble} ${orientation}`} />
        </div>
        <div>
          <b className="cube-controls__cube-label">{t('trainer.solutionLabel')}</b>
          <CubeViewer algorithm={`${scramble} ${orientation} ${algorithm}`} />
        </div>
      </div>
    </>
  );
}

export default CubeControls;
