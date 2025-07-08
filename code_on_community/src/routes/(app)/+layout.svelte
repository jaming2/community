<script>
    // No additional script logic needed for this static layout
</script>

<header>
    <nav class="navbar">
        <a href="/" class="logo">
            <img src="/logo.png" alt="Logo" />
            <p>이과 커뮤니티 Dell</p>
        </a>

        <ul class="nav-links">
            <li><a href="/">홈</a></li>
            <li><a href="/community">커뮤니티</a></li>
            <li><a href="/qna">문의사항</a></li>
            <li><a href="/resources">자료실</a></li>
        </ul>

        <div class="search-bar">
            <input type="text" placeholder="통합검색" />
            <button>검색</button>
        </div>
    </nav>
</header>

<slot />

<footer class="footer">
    <p>© 2025 이과 커뮤니티 | All Rights Reserved</p>
</footer>

<style>
    :root {
        --primary-color: #2c3e50;
        --accent-color: #3b82f6;
        --gold-accent: #bdc3c7;
        --text-color: #ecf0f1;
        --bg-color: #ffffff;
        --search-bg: #34495e;
        --footer-bg: #2c3e50;
        --footer-text: #bdc3c7;
        --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    header {
        background: var(--primary-color);
        padding: 0.6rem 1.2rem;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: var(--shadow);
        border-bottom: 1px solid var(--gold-accent);
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--text-color);
        font-size: 1.25rem;
        font-weight: 700;
    }

    .logo img {
        height: 34px;
        filter: invert(1);
        margin-right: 0.4rem;
    }

    .nav-links {
        list-style: none;
        display: flex;
        gap: 1.2rem;
        margin: 0;
        padding: 0;
    }

    .nav-links li a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 600;
        font-size: 1rem;
        position: relative;
        transition: color 0.3s ease;
    }

    .nav-links li a:hover {
        color: var(--accent-color);
    }

    .nav-links li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background: var(--accent-color);
        transition: width 0.3s ease;
    }

    .nav-links li a:hover::after {
        width: 100%;
    }

    .search-bar {
        display: flex;
        align-items: center;
        background: var(--search-bg);
        padding: 0.3rem 0.6rem;
        border-radius: 8px;
        box-shadow: var(--shadow);
        border: 1px solid var(--gold-accent);
        margin-left: 1rem;
    }

    .search-bar input {
        border: none;
        background: transparent;
        outline: none;
        color: var(--text-color);
        font-size: 1rem;
        padding: 0 0.5rem;
    }

    .search-bar button {
        background: var(--accent-color);
        border: none;
        padding: 0.4rem 0.8rem;
        color: var(--text-color);
        cursor: pointer;
        border-radius: 6px;
        font-weight: bold;
        transition: background 0.3s ease;
    }

    .search-bar button:hover {
        background: #2563eb;
    }

    .footer {
        padding: 1.2rem;
        background-color: var(--footer-bg);
        color: var(--footer-text);
        font-size: 0.95rem;
        text-align: center;
        border-top: 1px solid var(--gold-accent);
        box-shadow: var(--shadow);
    }
</style>
