import { Avatar } from './components/avatar';
import { Experience } from './components/experience';
import { IntroSection } from './components/intro-section';
import { ExternalLink } from 'lucide-react';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Animation } from './components/particles';

export function App() {
  return (
    <div>
      <div className="wrapper bg-[#03101B]" style={{ position: 'relative' }}>
        <div
          className="container mx-auto text-2xl  py-3"
          style={{ position: 'sticky', top: '0', right: 0 }}
        >
          <div className="col-span-4 max-w-6/12">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a className="bg-[#03101B] text-sm" href="">
                Download CV <FileDown className="inline" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-2xl md:py-20 px-8 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-40">
            <div className="md:col-span-2 col-span-1">
              <div className="mb-20 rounded-full neon-div relative">
                <Animation />

                <img
                  src="./../assets/hazar-avatar-transparent.png"
                  alt="Hazar Askari"
                  className="inline-block size-100"
                />
              </div>
              <div className="mb-20">
                <Experience
                  title={'Education'}
                  paragraph={
                    <>
                      <p>2011 - 2014 Bachelors Degree</p>
                      <p>Bachelor's degree, Computer Programming</p>
                    </>
                  }
                />
              </div>
              <div className="mb-20">
                {' '}
                <Experience
                  title={'Specialities'}
                  paragraph={
                    <p>
                      <span className="font-bold underline text-cyan-500">
                        React
                      </span>
                      , Angular, Vue, Nextjs, Javascript,{' '}
                      <span className="font-bold underline text-yellow-500">
                        Typescript
                      </span>
                      , jQuery, HTML5, SASS, Design Systems/Patterns, Style
                      Guides,{' '}
                      <span className="font-bold underline text-fuchsia-500">
                        Architecture
                      </span>
                      , Responsive Web Design, Mobile Web Design,{' '}
                      <span className="font-bold underline text-red-500">
                        Scaleability
                      </span>
                      ,{' '}
                      <span className="font-bold underline text-green-500">
                        Performance
                      </span>
                      , Testing
                    </p>
                  }
                />
              </div>
              <div className="mb-20">
                <Experience
                  title={'Contact'}
                  paragraph={
                    <>
                      <p> hazaraskari@gmail.com </p>
                      <p>+47 91 99 08 60</p>
                      <a
                        href="https://linkedin.com/in/hazar-askari"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        LinkedIn <ExternalLink size={16} className="inline" />
                      </a>
                    </>
                  }
                />
              </div>
              <div className="mb-20">
                <Experience
                  title={'Languages'}
                  paragraph={
                    <>
                      <p>
                        Norwegian:{' '}
                        <span className="text-green-600">Fluent</span>
                      </p>
                      <p>
                        English: <span className="text-green-600">Fluent</span>
                      </p>
                      <p>
                        Kurdish: <span className="text-green-600">Fluent</span>
                      </p>
                      <p>
                        Arabic: <span className="text-yellow-600">Basic</span>
                      </p>
                    </>
                  }
                />
              </div>
            </div>
            <div className="md:col-span-4 col-span-1 max-w-6/12">
              <div className="mb-40">
                <IntroSection />
              </div>

              <div className="mb-80">
                <Experience
                  {...{
                    titleColor: 'text-blue-400',
                    title: 'Miros Group',
                    subtitle: 'June 2022 - April 2025',
                    jobTitle:
                      'Front-end Solutions Architect and Lead Frontend developer at Miros AS',
                    paragraph: (
                      <div>
                        <p>
                          <span className="font-bold text-blue-200">
                            Team Leadership:{' '}
                          </span>
                          Manage and coordinate a team of six front-end
                          developers, overseeing the development and maintenance
                          of at least ten data-driven applications.
                        </p>
                        <br />

                        <p>
                          <span className="font-bold text-blue-200">
                            Architecture & Efficiency:{' '}
                          </span>
                          Implemented NX monorepo to create shared code
                          “building blocks,” ensuring consistency and efficiency
                          across projects
                        </p>
                        <br />

                        <p>
                          <span className="font-bold text-blue-200">
                            Performance Optimization:{' '}
                          </span>
                          Develop dashboards with extensive data visualization,
                          prioritizing high performance and preventing memory
                          leaks to handle large data sets effectively.
                        </p>
                        <br />

                        <p>
                          <span className="font-bold text-blue-200">
                            Code Quality & Maintenance:{' '}
                          </span>
                          Maintain robust versioning practices and high code
                          quality standards to support application stability and
                          scalability.
                        </p>
                      </div>
                    ),
                  }}
                />
              </div>
              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Omegapoint',
                    titleColor: 'text-green-400',
                    subtitle: ' 2018 - June 2022 (4 years)',
                    jobTitle: ' Lead Inhouse Frontend Engineer',
                    paragraph: (
                      <div>
                        <p>
                          <span className="font-bold text-green-200">
                            Department Building:{' '}
                          </span>
                          Established and led the front-end department, being
                          the first front-end developer hired to complement
                          existing Java and .NET teams.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-green-200">
                            Recruitment & Quality Assurance:{' '}
                          </span>
                          Conducted interviews, assessed candidates, and
                          performed quality checks to maintain high development
                          standards.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-green-200">
                            Team Development:{' '}
                          </span>
                          Organized meetups and delivered lectures on front-end
                          architecture, fostering continuous learning and
                          collaboration within the team.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-green-200">
                            Client Management:{' '}
                          </span>
                          Managed full-time client projects with a 100% invoice
                          rate while simultaneously growing and mentoring the
                          front-end team.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Hjemmelegene',
                    titleColor: 'text-red-400',
                    subtitle: 'March 2022 - August 2022 (6 months)',
                    jobTitle:
                      ' Frontend Solutions Architect  Consultant at Hjemmelegene',
                    paragraph: (
                      <div>
                        <p>
                          I helped develop Hjemmelegene monorepo Architecture
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-red-200">
                            Optimization:{' '}
                          </span>
                          Organized and restructured the codebase by
                          implementing an NX Monorepo, enabling efficient code
                          sharing across multiple applications.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-red-200">
                            Code Migration:{' '}
                          </span>
                          Successfully migrated existing code to the new
                          monorepo structure, enhancing maintainability and
                          scalability.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-red-200">
                            Developer Training:{' '}
                          </span>
                          Conducted introductory courses and workshops to
                          educate developers on the new architecture and best
                          practices.
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-red-200">
                            Collaboration & Support:{' '}
                          </span>
                          Worked closely with the development team to ensure a
                          smooth transition and provided ongoing support to
                          address any architectural challenges
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Favrit',
                    titleColor: 'text-yellow-400',
                    subtitle: 'January 2021 - March 2022 (1 year 3 months)',
                    jobTitle: 'Front End Architect Consultant',
                    paragraph: (
                      <div>
                        <p>
                          Initially served as the sole front-end developer,
                          designing and implementing the foundational user
                          interface and architecture.
                        </p>
                        <br />
                        <p>
                          Promoted to lead role as the team expanded, overseeing
                          the front-end architecture and mentoring a growing
                          team of developers.
                        </p>
                        <br />
                        <p>
                          Collaborated with cross-functional teams to ensure
                          cohesive and scalable solutions that enhanced user
                          experience.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Knowit',
                    titleColor: 'text-purple-400',
                    subtitle: 'November 2012 - March 2018 (5 years 5 months)',
                    jobTitle: 'Senior Inhouse Frontend Developer',
                    paragraph: (
                      <div>
                        <p>
                          During my five and a half years at Knowit, I worked on
                          a wide range of small and large-scale projects,
                          contributing to 10-15 different initiatives across
                          various industries. My role primarily focused on
                          frontend development, leveraging React, Angular, and
                          CMS platforms such as EPiServer and Umbraco to deliver
                          high-quality digital experiences.
                        </p>
                        <br />
                        <p>
                          I had the privilege of working on several high-profile
                          web projects, including:
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Banking & Finance:{' '}
                          </span>
                          BankAxept, Avida Finans, GE Money Bank, OBOS Banken,
                          Skoda Finans
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Corporate & Retail:{' '}
                          </span>
                          Moods of Norway, Høyer Finseth
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Public Sector & Nonprofits:{' '}
                          </span>
                          Justisforbundet, Bistandsaktuelt, Fiskeri- og
                          havbruksnæringens forskningsfond (FHF)
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Real Estate & Housing Cooperatives:{' '}
                          </span>
                          BBL, Bate, Tobb, USBL, Juslink
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Energy & Telecom:{' '}
                          </span>
                          Ishavskraft, Talkmore
                        </p>
                        <br />
                        <p>
                          <span className="font-bold text-purple-200">
                            Industrial & Agriculture:{' '}
                          </span>
                          Yara
                        </p>
                        <br />

                        <p>
                          As the lead frontend developer for several of these
                          projects, I played a key role in architecting and
                          optimizing frontend solutions, ensuring scalability,
                          maintainability, and performance. Working closely with
                          cross-functional teams, I helped shape digital
                          platforms that improved user engagement, streamlined
                          business operations, and delivered modern, responsive
                          web experiences.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Microsoft',
                    subtitle: 'January 2014 - May 2014 (5 months)',
                    titleColor: 'text-amber-400',
                    jobTitle:
                      'Bachelor Thesis | Microsoft – Innovation Hub Portal',
                    paragraph: (
                      <div>
                        <p>
                          For my bachelor thesis, my team and I collaborated
                          with Microsoft on developing an Innovation Hub Portal,
                          designed to connect people with ideas to developers
                          and other skilled professionals. The goal was to
                          create a centralized platform where innovators could
                          easily find the right talent to bring their ideas to
                          life.
                        </p>
                        <br />
                        <p>
                          My sole responsibility in this project was to develop
                          the entire frontend application, ensuring a seamless
                          and intuitive user experience. I focused on building a
                          modern, responsive, and scalable interface, leveraging
                          best practices in frontend development to create an
                          engaging and efficient platform for collaboration.
                        </p>
                        <br />

                        <p>
                          This project gave me valuable experience in
                          translating business requirements into functional UI,
                          working with stakeholders, and delivering a
                          user-friendly product that streamlined the process of
                          idea-sharing and team formation.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Burger King Corporation',
                    titleColor: 'text-rose-400',
                    subtitle: 'June 2005 - December 2011 (6 years 7 months)',
                    jobTitle: 'Shift Leader | Burger King',
                    paragraph: (
                      <div>
                        <p>
                          {' '}
                          My time at Burger King was an invaluable learning
                          experience that shaped my leadership skills, teamwork
                          abilities, and ability to perform under pressure. As a
                          Shift Leader, I was responsible for overseeing
                          restaurant operations, team coordination, and
                          maintaining high service standards, all while ensuring
                          a clean and well-functioning environment.
                        </p>
                        <br />
                        <p>
                          Working night shifts I often managed high-pressure
                          situations, especially during the post-club rush, when
                          hordes of hungry (and often intoxicated) customers
                          would flood in. This environment demanded quick
                          decision-making, efficient teamwork, and the ability
                          to stay calm under intense pressure.
                        </p>
                        <br />
                        <p>
                          Beyond managing the operational flow, I was
                          responsible for leading the team, delegating tasks,
                          and ensuring smooth service during peak hours. The
                          role also required me to enforce cleanliness
                          standards, oversee inventory, and maintain a positive
                          work environment to keep the team motivated.
                        </p>
                        <br />
                        <p>
                          This experience taught me resilience, adaptability,
                          and how to handle high-stress situations with
                          confidence.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Experience
                  {...{
                    title: 'Freelance photorapher',
                    titleColor: 'text-cyan-400',
                    subtitle: 'March 2003 - September 2011 (8 years 7 months)',
                    jobTitle: 'Freelance Photographer',
                    paragraph: (
                      <div>
                        <p>
                          {' '}
                          During my eight years as a freelance photographer, I
                          had the opportunity to work with renowned brands and
                          high-profile clients, delivering professional
                          photography services across various industries. My
                          portfolio includes collaborations with Burger King,
                          Umoe Catering, Ed Hardy, Karpe Diem, Biip.no, The Sun
                          Magazine, and Plan B, among others.
                        </p>
                        <br />
                        <p>
                          This role required a keen eye for detail, creativity,
                          and adaptability, as I worked on everything from
                          commercial shoots and corporate branding to artist
                          portraits and editorial photography. Managing projects
                          independently, I was responsible for concept
                          development, shooting, editing, and delivering
                          high-quality visual content that aligned with each
                          client’s vision and brand identity.
                        </p>
                        <br />
                        <p>
                          Through this experience, I honed my ability to work
                          under tight deadlines, communicate effectively with
                          clients, and deliver visually compelling work that met
                          professional standards. It also strengthened my
                          problem-solving skills and adaptability, which have
                          been invaluable throughout my career.
                        </p>
                      </div>
                    ),
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto text-2xl py-8 md:py-20 px-8 md:px-0"
          style={{ position: 'relative' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
            <div className="col-span-6 md:col-start-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20 mb-40 md:mb-80"
              >
                <Avatar
                  {...{
                    imgSrc: './../assets/nadine-avatar.png',
                    title: 'Nadine Ramsberg',
                    subtitle:
                      'Sprint Consulting | Digitalization Council | Former CPO',
                    paragraph: (
                      <>
                        <p>
                          It's not every day you come across a developer who
                          truly understands the importance of putting the user's
                          needs first. Hazar recognizes the value of this, has
                          the ability to see the bigger picture, and solves
                          challenges quickly and efficiently. For a UX designer,
                          collaborating with Hazar is a delight.
                        </p>
                        <br />
                        <p>
                          He is easily engaged, and with his ability to explain
                          complex concepts in a clear and understandable way, he
                          ensures that everyone is on the same page. At the same
                          time, he is one of those rare individuals who is
                          always positive, approachable, and cheerful—and people
                          like that make everyday work life better.
                        </p>
                      </>
                    ),
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20 mb-40 md:mb-80"
              >
                <Avatar
                  {...{
                    imgSrc: './../assets/asif-avatar.png',
                    title: 'Asif Liton',
                    subtitle: 'Senior developer at Cefalo ',
                    paragraph: (
                      <>
                        <p>
                          I have had the privilege to collaborate with Hazar,
                          who is an epidemic of technical expertise and excels
                          in constancy. He has a deep understanding of recent
                          and upcoming challenges, consistently providing
                          insightful solutions that drive projects forward. He
                          fosters a supportive and collaborative environment,
                          ensuring a motivated and focused team.
                        </p>
                        <br />
                        <p>
                          His energetic and charismatic presence in team
                          meetings is a treat for any engineering mind. His vast
                          arsenal of architectural knowledge, strategic
                          thinking, clear communication, and problem-solving
                          mindset make him an exceptional leader.
                        </p>
                      </>
                    ),
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20 mb-40 md:mb-80"
              >
                <Avatar
                  {...{
                    imgSrc: './../assets/ammar-avatar.png',
                    title: 'Amar Trebinjac',
                    subtitle: 'Software Developer',
                    paragraph: (
                      <>
                        <p>
                          As a junior developer at ITverket, Hazar was an
                          incredible mentor. He explained complex frontend
                          concepts clearly, helping me grow fast.
                        </p>
                        <br />
                        <p>
                          His leadership fostered an inclusive, motivating team,
                          where learning was constant. His passion for frontend
                          was contagious, and any team would benefit from his
                          expertise and mentorship.
                        </p>
                      </>
                    ),
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20 mb-40 md:mb-80"
              >
                <Avatar
                  {...{
                    imgSrc: './../assets/ingunn-avatar.png',
                    title: 'Ingunn Østhassel',
                    subtitle: 'Head of User Experience (UX)',
                    paragraph: (
                      <>
                        <p>
                          Hazar is the kind of developer you can only dream of
                          working with. In 9 out of 10 tasks on our backlog, he
                          solved them while we were still discussing them!
                        </p>
                        <br />
                        <p>
                          One of Hazar's greatest strength is his ability to
                          communicate and explain complex concepts in a very
                          friendly and approachable way. With Hazar, you can
                          always be sure that the job will be done with high
                          quality and a strong focus on both the customer's and
                          the users' needs.
                        </p>
                      </>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-20 mb-40 md:mb-80"
              >
                <Avatar
                  {...{
                    imgSrc: './../assets/rune-avatar.png',
                    title: 'Rune Horneland',
                    subtitle:
                      'Creates timesaving AI + No/low-code fullstack apps (20+ years pro-code experience) Certified Appfarm, MS Power Platform, Make.com «Code when you need it, UI when you dont»',
                    paragraph: (
                      <>
                        <p>
                          Creates timesaving AI + No/low-code fullstack apps
                          (20+ years pro-code experience) Certified Appfarm, MS
                          Power Platform, Make.com «Code when you need it, UI
                          when you dont»
                        </p>
                        <br />
                        <p>
                          Hazar is an exceptional consultant—the kind that truly
                          embodies what it means to be a top-tier professional.
                          He's not only highly skilled in his craft, but he also
                          possesses strong people skills, which makes him a
                          full-fledged consultant in every sense.
                        </p>
                        <br />
                        <p>
                          His frontend expertise is second to none, and he has
                          an instinctive grasp of the field. But what's even
                          more impressive is how quickly he picks up new
                          technologies—he mastered Umbraco in no time and
                          consistently delivers under estimated timelines. More
                          than once, he's casually mentioned completing a task
                          in 10-20% of the expected time, wondering if that
                          could possibly be correct!
                        </p>
                        <br />
                        <p>
                          Hazar is also an excellent mentor—he's pedagogical,
                          clear in his communication, and understands exactly
                          what a client needs to hear, while always being open
                          about his own thoughts.
                        </p>
                        <br />
                        <p>
                          I genuinely love working with Hazar, and so does
                          everyone else.
                        </p>
                      </>
                    ),
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
