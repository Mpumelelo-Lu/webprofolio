// Chart.js configuration
const chartConfig = {
    type: 'doughnut',
    options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const charts = [
    {
        id: 'englishChart',
        data: {
            datasets: [{
                data: [90, 10],
                backgroundColor: ['#4A4A4A', '#E5E5E5']
            }]
        }
    },
    {
        id: 'frenchChart',
        data: {
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#4A4A4A', '#E5E5E5']
            }]
        }
    },
    {
        id: 'spanishChart',
        data: {
            datasets: [{
                data: [85, 15],
                backgroundColor: ['#4A4A4A', '#E5E5E5']
            }]
        }
    }
];

// Initialize charts
charts.forEach(chart => {
    new Chart(
        document.getElementById(chart.id),
        {
            ...chartConfig,
            data: chart.data
        }
    );
});

// Typing animation
const jobTitles = [
    "Frontend Developer & UI/UX Designer",
    "Backend Developer",
    "Web Developer",
    "Full Stack Developer"
];

let currentTitleIndex = 0;
const jobTitleElement = document.getElementById('jobTitle');

async function typeText(text) {
    jobTitleElement.textContent = '';
    for(let char of text) {
        jobTitleElement.textContent += char;
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function eraseText() {
    while(jobTitleElement.textContent.length > 0) {
        jobTitleElement.textContent = jobTitleElement.textContent.slice(0, -1);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

async function animateJobTitle() {
    while(true) {
        await typeText(jobTitles[currentTitleIndex]);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await eraseText();
        currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
    }
}

// Modal functions
function closeModal() {
    document.getElementById('profileModal').classList.add('hidden');
}

// Initialize animations and hobby tracks
document.addEventListener('DOMContentLoaded', function() {
    animateJobTitle();
    
    // Clone hobby tracks for seamless animation
    const leftTrack = document.querySelector('.hobby-track-left');
    const rightTrack = document.querySelector('.hobby-track-right');
    
    if(leftTrack && rightTrack) {
        leftTrack.innerHTML = leftTrack.innerHTML + leftTrack.innerHTML;
        rightTrack.innerHTML = rightTrack.innerHTML + rightTrack.innerHTML;
    }
});
