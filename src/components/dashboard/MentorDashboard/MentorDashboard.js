import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../../constants/constants';
import './MentorDashboard.scss';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

export default function MentorDashboard() {

  /*
  set fullName -> ''
  projects -> []
  once cors issue is fixed by shubham mishra
  */
  const [fullName, setFullName]  = useState('Aditya Vikram Singh')
  const [projects, setProjects] = useState([
    {
       "ID":10,
       "CreatedAt":"2020-08-25T12:59:05.576749433+05:30",
       "UpdatedAt":"2020-08-25T12:59:05.576749433+05:30",
       "DeletedAt":null,
       "Name":"Project name 1",
       "Desc":"string",
       "Tags":"string",
       "RepoLink":"https://github.com/kossiitkgp/kwoc-stats-api",
       "ComChannel":"string",
       "MentorID":5
    },
    {
       "ID":11,
       "CreatedAt":"2020-08-25T13:03:08.432410139+05:30",
       "UpdatedAt":"2020-08-25T13:03:08.432410139+05:30",
       "DeletedAt":null,
       "Name":"Project name 2",
       "Desc":"string",
       "Tags":"string",
       "RepoLink":"https://github.com/kossiitkgp/kwoc-stats-api",
       "ComChannel":"string",
       "MentorID":5
    }
 ])

 const announcements= [
   {
     'date': '28Nov, 2020',
     'content': 'Please register your projects, registrations close on December 6, 2020'
   }
  ]

  const resources = [
    {
      message: 'Writing Kickass READMEs',
      url: 'http://www.bauva.com/blog/Writing-Kickass-READMEs/',
      avatar: 'http://www.bauva.com/images/bio-photo.jpg',
    },
    {
      message: 'Make a README',
      url: 'https://www.makeareadme.com/',
      avatar:
        'https://d33wubrfki0l68.cloudfront.net/ca149ad795cbdbe3a450dd7985baf0d763cc2fb6/0220f/images/owlbert.jpg',
    },
    {
      message: 'How to Write Beautiful and Meaningful README.md',
      url:
        'https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991',
      avatar:
        'https://miro.medium.com/fit/c/96/96/1*50FKErsxynOeSmrUZk5Bsw.jpeg',
    },
    {
      message: 'What being a Google Summer of Code mentor taught me?',
      url:
        'https://hackernoon.com/what-being-a-google-summer-of-code-mentor-taught-me-8c97aad503a5',
      avatar:
        'https://hackernoon.com/avatars/pwtNTVrD7BPYArwg776n1wGXP193.png',
    },
    {
      message: 'Official GSoC Mentoring Guide',
      url: 'https://google.github.io/gsocguides/mentor/mind-the-gap',
      avatar: 'https://google.github.io/gsocguides/images/sun-small.png',
    },
    {
      message: 'OSS Maintainer and being a Mentor',
      url: 'https://www.bwplotka.dev/2020/how-to-became-oss-maintainer/',
      avatar: 'https://www.bwplotka.dev/images/profile.jpg',
    },
  ]
  useEffect(() => {
    const URL = `${BACKEND_URL}/mentor/dashboard`;
    const data = {
      username: localStorage.getItem('mentor_username'),
    };
    console.log("data is ", data)
    fetch(URL, {
        method: 'POST',
        data: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        console.log("res.data ", res.data)
        setFullName(res.data.name)
        setProjects(res.data.projects)
    })
    .catch(err => {
     console.log('err is ',err)    
     alert('Server Error, Please try again')    
    })
  }, []);

  // sample data kept for future reference
  // let data = {
  //   name: 'Aditya Vikram Singh',
  //   github: 'xypnox',
  //   college: 'IIT Kharagpur',
  //   commits: {
  //     count: 235,
  //     commits: [
  //       {
  //         hash: '234rrt',
  //         project: 'xypnox/xyplot',
  //         messsage: 'Compress residual images for faster loading speed',
  //       },
  //       {
  //         hash: 'aw3548',
  //         project: 'kossiitkgp/darkHorse',
  //         messsage: 'Fix: Typo and spacing',
  //       },
  //       {
  //         hash: 'hhstb32',
  //         project: 'xypnox/todxpy',
  //         messsage: 'Introduce new sorting for todos',
  //       },
  //       {
  //         hash: 'y67eb6',
  //         project: 'kossiitkgp/KWoC',
  //         messsage: 'Replace navbar with footer for fun',
  //       },
  //     ],
  //   },
  //   // this is the total sum of PRs for all the projects that he has been mentoring.
  //   pullRequests: {
  //     count: 12,
  //     open: 5,
  //     closed: 6,
  //   },
  //   linesOfCode: {
  //     count: '126k',
  //   },
  //   languages: ['Python', 'Javascript', 'HTML', 'CSS'],
  //   projects: ['darkHorse', 'todxpy', 'KWoC'],
  //   resources: [
  //     {
  //       message: 'Writing Kickass READMEs',
  //       url: 'http://www.bauva.com/blog/Writing-Kickass-READMEs/',
  //       avatar: 'http://www.bauva.com/images/bio-photo.jpg',
  //     },
  //     {
  //       message: 'Make a README',
  //       url: 'https://www.makeareadme.com/',
  //       avatar:
  //         'https://d33wubrfki0l68.cloudfront.net/ca149ad795cbdbe3a450dd7985baf0d763cc2fb6/0220f/images/owlbert.jpg',
  //     },
  //     {
  //       message: 'How to Write Beautiful and Meaningful README.md',
  //       url:
  //         'https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991',
  //       avatar:
  //         'https://miro.medium.com/fit/c/96/96/1*50FKErsxynOeSmrUZk5Bsw.jpeg',
  //     },
  //     {
  //       message: 'What being a Google Summer of Code mentor taught me?',
  //       url:
  //         'https://hackernoon.com/what-being-a-google-summer-of-code-mentor-taught-me-8c97aad503a5',
  //       avatar:
  //         'https://hackernoon.com/avatars/pwtNTVrD7BPYArwg776n1wGXP193.png',
  //     },
  //     {
  //       message: 'Official GSoC Mentoring Guide',
  //       url: 'https://google.github.io/gsocguides/mentor/mind-the-gap',
  //       avatar: 'https://google.github.io/gsocguides/images/sun-small.png',
  //     },
  //     {
  //       message: 'OSS Maintainer and being a Mentor',
  //       url: 'https://www.bwplotka.dev/2020/how-to-became-oss-maintainer/',
  //       avatar: 'https://www.bwplotka.dev/images/profile.jpg',
  //     },
  //   ],
  //   student: ['yashrsharma44', 'rakaar', 'orkohunter'],
  //   announcement: [
  //     'Hi the KWOC has just started!',
  //     'Make sure you have submitted the mideval feedback for the student!',
  //     'Hi \n, the end evals have been finished!',
  //   ],
  //   evals: 'Mid Eval',
  // };

  let resourceList = [];
  for (const [index, elements] in resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  return (
    <div className='mentor-dashboard'>
      <link
        href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
        rel='stylesheet'
      ></link>
      <link rel='stylesheet' href='font-awesome/css/font-awesome.css'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        rel='stylesheet'
      ></link>
      {/*

         Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
      */}
      <Navbar className='is-black' />
      <div className='intro-card'>
        <div className='avatar grow-card'>
          <img
            src={`https://github.com/${localStorage.getItem('mentor_username')}.png`}
            id='avatar-img'
          ></img>
          <br />
          <div className='avatar-content'>
            <p id='mentor-name'>{fullName}</p>
            <p>({localStorage.getItem('mentor_username')})</p>
          </div>
        </div>

        <div className='mentor-stats '>
          <div className='mentor-stats-header'>
            <h1>Mentor Dashboard</h1>
          </div>
          <div className='mentor-stats-content'>
            <div className='card-component mstats grow-card'>
              <p className='font-mentor-header'>Projects</p>
              <p className='font-mentor-stats'>{projects.length}</p>
            </div>
            {/* <div className='card-component mstats students-mstats-card grow-card'>
              <p className='font-mentor-header'>Students</p>
              <p className='font-mentor-stats'>{data.student.length}</p>
            </div> */}
            <div className='card-component mstats students-mstats-card grow-card'>
              <p className='font-mentor-header'>Days Before Midevals</p>
              <p className='font-mentor-stats'>10</p>
            </div>
          </div>
          {/*<div className='card-component badges'>
            <h1>Badges</h1>
          </div>
          */}
        </div>
      </div>

      <div className='projects'>
        <div className='project-header'>
          <h1>Projects</h1>
        </div>
        <div className='projectcard'>
          {projects.length !== 0 ? (
            projects.map((item, index) => {
              return (
                <div className='project-c card-component grow-card'>
                  <div className='anchor-align'>
                    <p className='project-name'>{item.Name}</p>
                  </div>
                  <div className='project-buttons'>
                    <a
                      href={`${item.RepoLink}`}
                      className='project-button-small'
                    >
                      <img src='/github.svg' className='github-svg'></img>
                    </a>
                    <a
                      href={`${item.RepoLink}/issues`}
                      className='project-button-small'
                    >
                      Issues
                    </a>
                    <a
                      href={`${item.RepoLink}/pulls`}
                      className='project-button-small'
                    >
                      PRs
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='add-project-card'>
              <div className='header-add-project-card'>
                <p>You haven't added any projects yet</p>
              </div>
              <div className='add-project-button-div'>
                <a href='/form/project'>
                  <button className='add-project-button '>
                    <p className='plus-sign'>+</p>
                    <p className='text-add-project' href='/form/project'>Add Projects</p>
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className='students'>
        <div className='student-header'>
          <h1>Students</h1>
        </div>
        <div className='student-card'>
          {data.student.map((studentName, index) => {
            return (
              <div className='student-c card-component grow-card'>
                <div className='student-card-header'>
                  <img
                    src={`https://github.com/${studentName}.png`}
                    className='avatar-students-card'
                  ></img>
                  <p className='student-name'>{studentName}</p>
                </div>

                <div className='student-button'>
                  <a
                    className='student-profile student-button-small'
                    href={`https://github.com/${studentName}`}
                  >
                    <img src='/github.svg' className='github-svg-student'></img>
                  </a>
                  <a className='fill-evals student-button-small' href='#'>
                    Fill Evals
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      <section className='resource-card'>
        <div className='resource-header'>
          <b>Resources</b>
        </div>

        <table className='table is-bordered is-striped'>
          <th>Resource Link</th>
          <th>Details</th>

          <tbody>
            {resources.map((resourceCard) => {
              const message = resourceCard.message;
              const url = resourceCard.url;
              const avatar = resourceCard.avatar;

              return (
                <tr>
                  <td>
                    <a href={url}>
                      <img
                        src={avatar}
                        className='avatar-resource'
                        alt='link'
                      ></img>
                    </a>
                  </td>
                  <td>
                    <a href={url}>
                      <p>{message}</p>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <div className='announcements'>
        <h1>Announcements</h1>

        {announcements.map((item, index) => {
          return (
            <div className='anc-card card-component grow-card'>
              <h1>{item.date}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}