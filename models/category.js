class Category {
    constructor(id, title, color, url) {
        this.id = id;
        this.title = title;
        this.color = color;
        this.url = {
            uri: url
        };
    }
}

export default Category;