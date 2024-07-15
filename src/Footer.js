import { ghp_url } from "./ghp_config";

function Footer() {
    return (
        <footer class="footer">
            <h3><a href={ghp_url} title="Home">memto.github.io</a></h3>
            <small>
                &copy; <time>2024</time> ianwork9x's blog. All rights reserved.
            </small>
        </footer>
    );
}

export default Footer;