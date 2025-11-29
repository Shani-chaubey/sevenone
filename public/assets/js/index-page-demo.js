//  JS for hero section form

const runOnReady = (callback) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
};

let activeIndex = -1; // Tracks the active suggestion

function fetchSuggestions(query) {
  const suggestionsBox = document.getElementById("suggestions");

  if (query.trim().length > 0) {
    fetch(`suggest?query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => {
        suggestionsBox.innerHTML = "";
        if (data.length > 0) {
          data.forEach((keyword, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = keyword;

            // Handle click event
            listItem.addEventListener("click", () => {
              document.querySelector("input[name=search]").value = keyword;
              submitForm();
            });

            suggestionsBox.appendChild(listItem);
          });
          suggestionsBox.classList.add("show");
          activeIndex = -1; // Reset active index
        } else {
          suggestionsBox.classList.remove("show");
        }
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
      });
  } else {
    suggestionsBox.classList.remove("show");
  }
}

function handleKeyNavigation(event) {
  const suggestionsBox = document.getElementById("suggestions");
  const suggestions = suggestionsBox.querySelectorAll(".list-group-item");

  if (suggestions.length > 0) {
    if (event.key === "ArrowDown") {
      // Move down
      event.preventDefault();
      activeIndex = (activeIndex + 1) % suggestions.length;
      highlightSuggestion(suggestions, activeIndex);
    } else if (event.key === "ArrowUp") {
      // Move up
      event.preventDefault();
      activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length;
      highlightSuggestion(suggestions, activeIndex);
    } else if (event.key === "Enter") {
      // Select the highlighted suggestion or submit input value
      event.preventDefault();
      if (activeIndex >= 0) {
        const selectedSuggestion = suggestions[activeIndex].textContent;
        document.querySelector("input[name=search]").value = selectedSuggestion;
      }
      submitForm();
    }
  }
}

function highlightSuggestion(suggestions, index) {
  suggestions.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
      // Ensure the active suggestion is in view
      item.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    } else {
      item.classList.remove("active");
    }
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  submitForm();
}

function submitForm() {
  const input = document.querySelector("input[name=search]");
  const query = input.value.trim();
  if (query) {
    window.location.href = `search?search=${encodeURIComponent(query)}`;
  } else {
    alert("Please enter a search term.");
  }
}

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
  const suggestionsBox = document.getElementById("suggestions");
  if (!event.target.closest(".form-group")) {
    suggestionsBox.classList.remove("show");
  }
});

//  Featured property carousel handled within React (useLegacySwipers)

//  JS used in property grid
function showMoreProperties() {
  const propertyCards = document.querySelectorAll(
    "#propertiesGrid .property-card"
  );
  const readMoreBtn = document.getElementById("readMoreBtn");
  const screenWidth = window.innerWidth;
  const increment = screenWidth > 700 ? 6 : 3; // Show 6 on desktop and 3 on mobile

  // Count currently visible property cards
  let visibleCount = 0;
  propertyCards.forEach((card) => {
    if (card.style.display !== "none" && card.style.display !== "") {
      visibleCount++;
    }
  });

  // Show the next batch of cards
  for (
    let i = visibleCount;
    i < visibleCount + increment && i < propertyCards.length;
    i++
  ) {
    propertyCards[i].style.display = "grid"; // Adjust based on your layout (e.g., grid or block)
  }

  // Hide the button if all cards are visible
  if (visibleCount + increment >= propertyCards.length) {
    readMoreBtn.style.display = "none";
  }
}

// Initial setup to ensure only the first batch is shown based on screen size
function initializeProperties() {
  const propertyCards = document.querySelectorAll(
    "#propertiesGrid .property-card"
  );
  const screenWidth = window.innerWidth;
  const increment = screenWidth > 700 ? 6 : 3; // Show 6 on desktop and 3 on mobile

  // Hide all cards initially
  propertyCards.forEach((card) => {
    card.style.display = "none";
  });

  // Show the first batch of cards
  for (let i = 0; i < increment && i < propertyCards.length; i++) {
    propertyCards[i].style.display = "grid"; // Adjust based on your layout (e.g., grid or block)
  }

  // Show the "Read More" button if there are more cards to display
  const readMoreBtn = document.getElementById("readMoreBtn");
  if (propertyCards.length > increment) {
    readMoreBtn.style.display = "flex";
  } else {
    readMoreBtn.style.display = "none";
  }
}

// Run the initialization on page load and on window resize
runOnReady(initializeProperties);
window.addEventListener("resize", initializeProperties);

function nextImage(container) {
  const images = container.getElementsByTagName("img");
  let currentIndex;
  for (let i = 0; i < images.length; i++) {
    if (images[i].style.display !== "none") {
      currentIndex = i;
      images[i].style.display = "none";
      break;
    }
  }
  const nextIndex = (currentIndex + 1) % images.length;
  images[nextIndex].style.display = "block";
}

//  Carousel behaviours now initialized via useLegacySwipers React hook

//  Nice select js

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);
