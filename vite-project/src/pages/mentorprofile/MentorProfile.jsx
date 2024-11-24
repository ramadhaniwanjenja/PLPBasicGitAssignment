import { NavigationItem } from './components/NavigationItem';
import { MentorCard } from './components/MentorCard';
import styles from './styles/MentorProfile.module.css';

const navigationItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/067091cfade3b022546f7e7425b6ea84a9dd808f080dcae1e3edf2ee3ef07aa5?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694',
     label: 
    'Home', isActive: false, link: "/" },
  { icon: '', label: 'Mentors', isActive: true, link: "/mentorprofile" },
  { icon: '', label: 'Courses', isActive: false, link: "/coursemodule" },
];

const mentorData = {
  name: 'Rebecca Williams',
  title: 'Graphic Designer and mentor',
  image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d9461180cfbdc87123df4a235350d19c43ea9cb7b57090a30b939b60f57537b?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694',
  experience: 'Senior UIUX designer and mentor\n11+ years in graphic design, 7+ years mentoring',
  education: "Bachelor's degree in Graphic Design, Certification in graphic Design",
  career: "Started as a Junior Designer at a small agency, working on diverse client projects. Over time, developed a passion for branding and digital design. Now works at a medium-sized agency handling more complex projects and collaborating closely with senior designers and clients.",
  tools: "Figma, Sketch, Adobe XD, InVision, Miro, Zeplin"
};

const MentorProfile = () => {
  return (
    <main className={styles.profileContainer}>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>
          <nav className={styles.navigation}>
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cce87849c2ff2bf3f8ed57804dd3a554d746d000677e7bb6adc650d8eb9f32f4?placeholderIfAbsent=true&apiKey=948df72a40ee4e568bae6fc607598694" alt="" className={styles.decorativeImage} />
          </nav>
        </aside>
        
        <section className={styles.mainContent}>
          <div className={styles.headerSection}>
            <div className={styles.roleIndicator}>
              <div className={styles.roleIcon} />
              <h1 className={styles.roleTitle}>COURSE MENTOR</h1>
            </div>
            <h2 className={styles.courseTitle}>GRAPHIC DESIGN</h2>
          </div>
        </section>
        
        <section className={styles.profileSection}>
          <MentorCard {...mentorData} />
        </section>
      </div>
    </main>
  );
};

export default MentorProfile;