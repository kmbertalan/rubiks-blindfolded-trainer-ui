import "./HowToPage.css";

function HowToPage() {
  return (
    <div className="how-to-page">
      <div className="how-to-page__content">
        <h3>How to Use Blind Cube Trainer</h3>
        <div className="how-to-page__info-box">
          <p className="how-to-page__info-text">
            {
              "Welcome! This app is designed to help you practice blindfold solving with the "
            }
            <a
              href="https://cuberoot.me/wp-content/uploads/2019/02/502-3BLD-OP.pdf"
              target="_blank"
            >
              Old Pochmann Method
            </a>
            .
            <ul className="how-to-page__info-list">
              <li>
                For edges, the buffer is UR. We handle swaps with UL using a
                T-perm.
              </li>
              <li>For corners, the buffer is UBL. We handle swaps with BFR.</li>
            </ul>
            <b>
              The app validates your blindfold solutions so you can focus on
              memorization and execution.
            </b>
          </p>
        </div>
        <div className="how-to-page__images-container">
          <img src="/edge.png" alt="Edge" className="how-to-page__image" />
          <img src="/corner.png" alt="Corner" className="how-to-page__image" />
        </div>
        <div className="how-to-page__bottom-info">
          <p className="how-to-page__bottom-text">Here's how it works:</p>
          <ol className="how-to-page__steps-list">
            <li>
              <strong>Scramble:</strong> Set a scramble for practice.
            </li>
            <li>
              <strong>Orientation:</strong> Adjust orientation controls if
              needed (your solution will follow this orientation).
            </li>
            <li>
              <strong>Enter Solution:</strong> Type in your solution attempt.
            </li>
            <li>
              <strong>Cubes:</strong> Compare the scramble (left cube) and your
              solution applied (right cube).
            </li>
            <li>
              <strong>Current Solution:</strong> Review your edge & corner
              sequences.
            </li>
          </ol>
        </div>
      </div>

      <div className="how-to-page__screenshot-container">
        <img
          src="/screenshot_with_numbers.png"
          alt="App screenshot"
          className="how-to-page__screenshot"
        />
      </div>
    </div>
  );
}

export default HowToPage;
