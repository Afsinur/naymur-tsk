const ServiceContent = () => {
  return (
    <div className="service-content-cont">
      <div className="top">
        <div className="card">
          <img
            src="https://www.tsiakkas.com/wp-content/uploads/2021/07/serv-ic-01-1.png"
            alt="img"
          />
          <h2>
            Managed Printing Services/ <br />
            Leasing with All Inclusive Packages
          </h2>
          <p>
            All-inclusive leasing packages with automatic notifications for low
            toners and serious errors so you can avoid zero downtime.
          </p>
          <p>Also secure printing and controlled printing for each user.</p>
          <button>View More</button>
        </div>

        <div className="card">
          <img
            src="https://www.tsiakkas.com/wp-content/uploads/2021/07/serv-ic-03.png"
            alt="img"
          />
          <h2>
            Computers, Server and Network <br />
            Maintenance & Security
          </h2>
          <p>
            We offer affordable month to month maintenance services for PCs,
            Servers and for your network environment. Securing your business
            from hackers, viruses and ransomware it is also one of our top
            priorities.
          </p>
          <button>View More</button>
        </div>
      </div>

      <div className="bottom">
        <div className="card">
          <img
            src="https://www.tsiakkas.com/wp-content/uploads/2021/07/serv-ic-06.png"
            alt="img"
          />
          <h2>Backup Solutions</h2>
          <p>
            We offer backup solutions from in-premise solutions to cloud
            solutions. You never know when the disaster will come {"("}physical
            or cyber-attack{")"}.
          </p>
          <button>View More</button>
        </div>

        <div className="card">
          <img
            src="https://www.tsiakkas.com/wp-content/uploads/2021/07/serv-ic-04.png"
            alt="img"
          />
          <h2>Shredder Leasing & Maintenance</h2>
          <p>
            Leasing a shredder with an all – inclusive service, oiling and
            maintenance scheme will give you piece of mind.
          </p>
          <button>View More</button>
        </div>

        <div className="card">
          <img
            src="https://www.tsiakkas.com/wp-content/uploads/2021/07/serv-ic-05.png"
            alt="img"
          />
          <h2>Document Management</h2>
          <p>
            State of the art document management software can help you scan and
            digitize all your documents that you can search and find in a matter
            of seconds.
          </p>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
