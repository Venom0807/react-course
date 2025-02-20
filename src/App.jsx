import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { CiPower } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
function App() {
  return (
    <main>
      <nav>
        <div className="nav-main">
          <div className="nav-logo">
            <img src="logo.svg" alt="" />
            <div className="nav-search">
              <IoIosMenu />
              <CiSearch />
              <input type="text" placeholder="Search projects" />
            </div>
          </div>
          <div className="nav-links">
            <div className="account">
              <img src="account.jpg" alt="" />
              <p>Ahmer Khan</p>
            </div>
            <div className="icons">
              <FaRegEnvelope />
              <CiBellOn />
              <CiPower />
              <HiOutlineMenuAlt2 />
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="sidebar">
          <div className="side-account">
            <img src="account.jpg" alt="" />
            <div className="side-account-info">
              <strong>Ahmer Khan</strong>
              <p>Web Developer</p>
            </div>
            <BsBookmarkCheckFill />
          </div>
          <div className="sideLinks">
            <div className="sideLink">
              <p>Dashboard</p>
              <div className="sideIcon">
                <IoMdHome />
              </div>
            </div>
            <div className="sideLink">
              <p>Basic UI Elements</p>
              <div className="sideIcon">
                <BiTargetLock />
              </div>
            </div>
            <div className="sideLink">
              <p>Form Elements</p>
              <div className="sideIcon">
                <TfiMenuAlt />
              </div>
            </div>
            <div className="sideLink">
              <p>Tables</p>
              <div className="sideIcon">
                <FaCalendarAlt />
              </div>
            </div>
            <div className="sideLink">
              <p>Icons</p>
              <div className="sideIcon">
                <MdOutlineContacts />
              </div>
            </div>
            <div className="sideLink">
              <p>Charts</p>
              <div className="sideIcon">
                <IoBarChartSharp />
              </div>
            </div>
            <div className="sideLink">
              <p>User Pages</p>
              <div className="sideIcon">
                <IoMdLock />
              </div>
            </div>
            <div className="sideLink">
              <p>Error Pages</p>
              <div className="sideIcon">
                <MdOutlineSecurity />
              </div>
            </div>
            <div className="sideLink">
              <p>General Pages</p>
              <div className="sideIcon">
                <MdOutlineHealthAndSafety />
              </div>
            </div>
            <div className="sideLink">
              <p>Documentation</p>
              <div className="sideIcon">
                <CgFileDocument />
              </div>
            </div>
          </div>
        </div>
        <div className="dashBoard">
          <div className="home">
            <div className="dHome">
              <div className="homeIcon">
                <IoMdHome />
              </div>
              <strong>Dashboard</strong>
            </div>
            <p>
              Overview <IoIosInformationCircleOutline />
            </p>
          </div>
          <div className="dContainer">
            <div className="dCard">
              <div>
                <p>Weekly Sales</p>
                <FaChartLine />
              </div>
              <h2>$ 15,0000</h2>
              <p>Increased by 60%</p>
            </div>
            <div className="dCard dCard2">
              <div>
                <p>Weekly Sales</p>
                <FaChartLine />
              </div>
              <h2>$ 15,0000</h2>
              <p>Increased by 60%</p>
            </div>
            <div className="dCard dCard3">
              <div>
                <p>Weekly Sales</p>
                <FaChartLine />
              </div>
              <h2>$ 15,0000</h2>
              <p>Increased by 60%</p>
            </div>
          </div>
          <div className="analyze">
            <div className="dChart">
              <div className="dChartTop">
                <p>Visit And Sales Statistics</p>
                <div className="countries">
                  <div>
                    <div className="circle"></div>
                    <p>CHN</p>
                  </div>
                  <div>
                    <div className="circle circle2"></div>
                    <p>USA</p>
                  </div>
                  <div>
                    <div className="circle circle3"></div>
                    <p>UK</p>
                  </div>
                </div>
              </div>
              <img src="download.png" alt="" />
            </div>
            <div className="traffic">
              <p>Traffic Sources</p>
              <img src="download (1).png" alt="" />
              <div className="amounts">
                <div className="amount">
                  <div>
                    <div className="circle"></div>
                    <p>Search Engines</p>
                  </div>
                  <p>30%</p>
                </div>
                <div className="amount">
                  <div>
                    <div className="circle circle2"></div>
                    <p>Search Engines</p>
                  </div>
                  <p>30%</p>
                </div>
                <div className="amount">
                  <div>
                    <div className="circle circle3"></div>
                    <p>Search Engines</p>
                  </div>
                  <p>30%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tickets">
            <p>Recent Tickets</p>
            <div className="table">
              <div className="tHead">
                <p>Assignee</p>
                <p>Subject</p>
                <p>Status</p>
                <p>Last Update</p>
                <p>Tracking ID</p>
              </div>
              <div className="t1">
                <div className="id">
                  <img src="account.jpg" alt="" />
                  <p>Ahmer Khan</p>
                </div>
                <p> Fund is not recieved</p>
                <p className="status">Done</p>
                <p>Dec 5, 2017</p>
                <p>WD-12345</p>
              </div>
              <div className="t1">
                <div className="id">
                  <img src="account.jpg" alt="" />
                  <p>Ahmer Khan</p>
                </div>
                <p> Fund is not recieved</p>
                <p className="status">Done</p>
                <p>Dec 5, 2017</p>
                <p>WD-12345</p>
              </div>
              <div className="t1">
                <div className="id">
                  <img src="account.jpg" alt="" />
                  <p>Ahmer Khan</p>
                </div>
                <p> Fund is not recieved</p>
                <p className="status">Done</p>
                <p>Dec 5, 2017</p>
                <p>WD-12345</p>
              </div>
              <div className="t1">
                <div className="id">
                  <img src="account.jpg" alt="" />
                  <p>Ahmer Khan</p>
                </div>
                <p> Fund is not recieved</p>
                <p className="status">Done</p>
                <p>Dec 5, 2017</p>
                <p>WD-12345</p>
              </div>
            </div>
          </div>
          <div className="tareekh">
            <div class="calendar">
              <div class="calendar-header">
                <p>&#9664;</p>
                <h1>January 2025</h1>
                <p>&#9654;</p>
              </div>
              <div class="calendar-weekdays">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div class="calendar-days">
                <div></div>
                <div></div>
                <div></div>
                <div class="today">1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div></div>
              </div>
            </div>
            <div className="updates">
              <p>Recent Updates</p>
              <div className="uInfo">
                <div>
                  <CiUser />
                  <p>jack Menqu</p>
                </div>
                <div>
                  <CiClock2 />
                  <p>October 3rd, 2018</p>
                </div>
              </div>
              <div className="uimg">
                <img src="uimg1.jpg" alt="" />
                <img src="uimg2.jpg" alt="" />
                <img src="uimg3.jpg" alt="" />
                <img src="uimg4.jpg" alt="" />
              </div>
              <div className="ufooter">
                <div className="uID">
                  <img src="ufooter.jpg" alt="" />
                  <div className="uidInfo">
                    <strong>School Website - Authentication Module.</strong>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page.
                    </p>
                  </div>
                </div>
                <CiHeart />
              </div>
            </div>
          </div>
          <div className="aakhir">
            <div className="project">
              <p>Project Status</p>
              <table>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Due Date</th>
                  <th>Progress</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Herman Beck</td>
                  <td>May 15, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar teal"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Messsy Adam</td>
                  <td>Jul 01, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar pink"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John Richards</td>
                  <td>Apr 12, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar yellow"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Peter Meggik</td>
                  <td>May 15, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar purple"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Edward</td>
                  <td>May 03, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar orange"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ronald</td>
                  <td>Jun 05, 2015</td>
                  <td>
                    <div class="progress-container">
                      <div class="progress-bar blue"></div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="task">
              <div className="tSearch">
                <input
                  type="text"
                  placeholder="What do you need to do today?"
                />
                <button>Add</button>
              </div>
              <div className="tasks">
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
                <div className="t">
                  <div className="box">
                    <input type="checkbox" />
                    <p>Pick up kids from school</p>
                  </div>
                  <RxCrossCircled />
                </div>
              </div>
            </div>
          </div>
          <footer>
            <p>
              Copyright © <a href="">bootstrapdash.com</a> 2020
            </p>
            <p>
              Free <a href="">react admin</a> templates from BootstrapDash.com.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
