import styles from './checklist.module.css';
import './checklist.css'

export default function ChecklistLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className={`min-h-screen ${styles.main}`}>{ children }</main>
    )
  }