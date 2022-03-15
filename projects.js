
    const projects = [
        {
            name: "QR Code Component",
            description: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
            tags: ["html", "css"],
            image: "/qr-code-component-main/design/desktop-preview.jpg",
            link: "/qr-code-component-main"
        }
    ]


    const site = {
        projects,
        search: '',
        get filteredProjects() {
            return this.projects.filter(project => {
                const search = this.search.toLowerCase()
                const {name, description, tags} = project
                return name.toLowerCase().includes(search) || description.toLowerCase().includes(search) || tags.filter(tag => tag.toLowerCase().includes(search)).length > 0
            }) || []
        }
    }

document.addEventListener('alpine:init', () => {
    Alpine.data('site', () => (site))
})