import styles from "@/components/header/styles.module.css"
import Link from "next/link"
import { useSession, signIn, signOut} from 'next-auth/react'

export function Header(){

    const { data: session, status } = useSession()




    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>Tarefas <span>+</span></h1>
                    </Link>

                    {session?.user && (
                        <Link href="/dashboard"  className={styles.link}>
                            Meu painel
                        </Link>
                    )}
                </nav>

            {status === 'loading' ? (
                <>
                </>
                // Se estiver carregando, não faz nada
                // Não está carregando? então...
            ) : session ? (
                <button className={styles.loginButton} onClick={() => signOut() }>
                    Olá {session?.user?.name}
                </button>
                // Se houver uma sessão ativa, mostra o botão se signOut
            ) : (
                // Como não tem sessão ativa, mostra botão de login
                <button className={styles.loginButton} onClick={() => signIn("google")}>
                    Acessar
                </button>
            )}
            </section>
        </header>
    )
}