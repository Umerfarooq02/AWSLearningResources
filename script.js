document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");
    const form = document.getElementById("add-topic-form");
    const headlineInput = document.getElementById("headline");
    const contentInput = document.getElementById("content");
  
    // Initial Data
    const topics = [
      {
        headline: "Advantages of Cloud Computing",
        content: "No upfront costs; pay on-demand for resources.",
      },
      {
        headline: "Types of Cloud Computing",
        content: "SaaS: Managed software for customers, PaaS: Platform tools for developers, IaaS: Basic IT resources for administrators.",
      },
      {
        headline: "Deployment Models",
        content: "Cloud: Fully hosted Model, Hybrid: Mix of cloud and on-premises,and On-Premises: Locally hosted, sometimes called private cloud.",
      },
    ];
  
    // Function to Render Cards
    function renderCards() {
      cardContainer.innerHTML = "";
      topics.forEach((topic, index) => {
        const cardHTML = `
          <div class="col-md-4 d-flex justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h4>${topic.headline}</h4>
                </div>
                <div class="flip-card-back">
                  <p>${topic.content}</p>
                  <button class="btn btn-danger btn-sm mt-2" onclick="deleteTopic(${index})">Delete</button>
                </div>
              </div>
            </div>
          </div>`;
        cardContainer.innerHTML += cardHTML;
      });
    }
  
    // Add Topic
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTopic = {
        headline: headlineInput.value,
        content: contentInput.value,
      };
      topics.push(newTopic);
      headlineInput.value = "";
      contentInput.value = "";
      renderCards();
    });
  
    // Delete Topic
    window.deleteTopic = function (index) {
      topics.splice(index, 1);
      renderCards();
    };
  
    // Initial Render
    renderCards();
  });
  