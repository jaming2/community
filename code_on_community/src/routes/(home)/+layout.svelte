<script>

</script>

<!-- npm run dev -- --host -->
<header>
    <nav class="navbar">
        <a href="/" class="logo">
            <img src="logo.png" alt="" style="height: 40px; padding-bottom: 0.1rem; filter: invert(1);">
        </a>
        <ul class="menu">
            <li><a href="/">홈</a></li>
            <li><a href="/community">커뮤니티</a></li>
            <li><a href="/qna">문의사항</a></li>
            <li><a href="/resources">자료실</a></li>
        </ul>
        <ul class="login">
            <li><a href="/">로그인</a></li>
            <li><a href="/">회원가입</a></li>
        </ul>
    </nav>
</header>

<slot /> 

<footer class="footer">
    <p>© 2025 이과 커뮤니티. All rights reserved.</p>
</footer>

<style>
    header {
        background: #2c3e50;
        padding: 0.5rem 2rem;
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        align-items: center;
        flex: 1;
    }

    .menu {
        flex: 2;
        list-style: none;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }
    
    .login {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        list-style: none;
        gap: 2rem;
    }

    nav ul li a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 1.2rem;
    }

    nav ul li a:hover {
        text-decoration: underline;
    }

    .footer {
        padding: 1.5rem 2rem;
        background-color: #fafafa;
        color: #777;
        font-size: 0.9rem;
        text-align: center;
        border-top: 1px solid #e0e0e0;
        margin-top: 3rem;
    }
</style>