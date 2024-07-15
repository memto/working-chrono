import { 
    ghp_title, 
    ghp_tagline, 
    ghp_url, 
    // ghp_pages, 
    // ghp_categories,
} from "./ghp_config";

function Header() {
    return (
        <header class="header clearfix ">
            <span id="logo">
                <h3><a href={ghp_url} title="Home">{ghp_title}</a></h3>
                <span>{ ghp_tagline }</span>
            </span>

            {/* <nav id="top-nav">
                <span id="site-meta">
                    { ghp_pages.map(function (d, idx) {
                        return <small><a href="{ghp_url}{d.path}">{ d.title }</a></small>
                    })}
                </span>
                <span id="category">
                    {ghp_categories.map(function (d, idx) {
                        return <small><a href="{ghp_url}{d.path}">&raquo;{d.title}</a></small>
                    })}
                </span>
            </nav> */}
        </header>
    );
}

export default Header;