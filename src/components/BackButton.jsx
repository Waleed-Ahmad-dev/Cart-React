import { useNavigate } from 'react-router-dom';
import '../styles/backButton.css';

function BackButton() {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
        </button>
    );
}

export default BackButton;