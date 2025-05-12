import React from "react";
import styles from "./ThankYou.module.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className={styles.thankYouContainer}>
      <svg
        className={styles.successIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>

      <h2>Благодарим Ви за запитването!</h2>
      <p>
        Нашият екип ще се свърже с Вас възможно най-скоро, за да потвърдим
        подробностите около преместването.
      </p>
      <p>
        Ако имате спешни въпроси, не се колебайте да се свържете с нас директно.
      </p>
      <p>
        <a href="mailto:your-email@example.com" className={styles.emailLink}>
          Изпратете ни имейл
        </a>
      </p>
      <Link to="/" className={styles.backButton}>
        Обратно към началната страница
      </Link>
    </div>
  );
};

export default ThankYou;
