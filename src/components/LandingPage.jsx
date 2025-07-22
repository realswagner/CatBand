import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div style={{textAlign: 'center', padding: '2rem'}}>
            <h1>Tiny Cat Band</h1>
            <p>Build your own cat band and rock out!</p>
            <button onClick={() => navigate('/stage')}>Start Your Band</button>
        </div>
    );
}

export default LandingPage;