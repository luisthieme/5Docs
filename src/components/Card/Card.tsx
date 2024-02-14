import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { ReactNode } from "react";
import cn from "clsx";
import { motion } from "framer-motion";
import styles from "./style.module.css";

export function Card({
  children,
  centered,
  className,
  href,
  large,
  medium,
  small,
  ...props
}: {
  children?: any;
  centered?: any;
  className?: any;
  href?: any;
  large?: any;
  medium?: any;
  small?: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={cn(
        styles.card,
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        centered && styles.centered,
        className
      )}
      {...props}>
      {children}
      {href ? (
        <Link className={styles.link} href={href}>
          <ArrowRightIcon width="1.5em" />
        </Link>
      ) : null}
    </motion.div>
  );
}

export function Cards({ children }: { children: ReactNode }) {
  return <div className={styles.cards}>{children}</div>;
}
