import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-headers-and-templates
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={classNames(styles['nav-bar'], styles.root)}>
                <a href="/home" className={classNames(styles['nav-links'], styles.first)}>
                    mich-stacey
                </a>
                <a href="/projects" className={styles['nav-links']}>
                    <span aria-disabled>_</span>hello
                </a>
                <a href="/about" className={styles['nav-links']}>
                    <span aria-disabled>_</span>about-me
                </a>
                <a href="/projects" className={styles['nav-links']}>
                    <span aria-disabled>_</span>projects
                </a>
                <a href="/contact" className={classNames(styles['nav-links'], styles.last)}>
                    <span aria-disabled>_</span>contact-me
                </a>
            </nav>
        </div>
    );
};
