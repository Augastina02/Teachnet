//
document.addEventListener('DOMContentLoaded', () => {
    const resourcesList = document.getElementById('resourcesList');

    // Example free resources data
    const freeResources = [
        {
            title: 'Math Worksheets',
            description: 'A collection of worksheets for teaching math.',
            teacher: 'John Doe'
        },
        {
            title: 'Science Experiments',
            description: 'Fun and educational science experiments for kids.',
            teacher: 'Jane Smith'
        },
        {
            title: 'History Lesson Plans',
            description: 'Detailed lesson plans for teaching history.',
            teacher: 'Emily Johnson'
        }
    ];

    // Function to render the resources
    function renderResources(resources) {
        resourcesList.innerHTML = ''; // Clear existing content
        resources.forEach(resource => {
            const resourceElement = document.createElement('div');
            resourceElement.classList.add('resource');
            resourceElement.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <p><strong>Provided by:</strong> ${resource.teacher}</p>
            `;
            resourcesList.appendChild(resourceElement);
        });
    }

    // Render the free resources
    renderResources(freeResources);
});
