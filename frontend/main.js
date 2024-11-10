// frontend/main.js
import { HelloComponent } from './components/HelloComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.appendChild(HelloComponent());
});
