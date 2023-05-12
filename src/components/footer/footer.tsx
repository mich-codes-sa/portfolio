import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={classNames(styles['nav-bar'], styles.root)}>
                <p className={classNames(styles['nav-links'], styles.first)}>Follow me on: </p>
                <a href="https://twitter.com/Mich_Codes" className={styles['nav-links']}>
                    twitter
                </a>
                <a href="https://www.linkedin.com/in/mich-stacey/" className={styles['nav-links']}>
                    linkedin
                </a>
                <a href="https://wellfound.com/u/mich-stacey" className={styles['nav-links']}>
                    angellist
                </a>
                <a href="https://github.com/mich-codes-sa" className={classNames(styles['nav-links'], styles.last)}>
                    github
                </a>
            </nav>
        </div>
    );
};
