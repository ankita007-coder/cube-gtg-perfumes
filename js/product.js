// Expand/Collapse Subscription Options
const singleRadio = document.querySelector("input[value='single']");
const doubleRadio = document.querySelector("input[value='double']");

const singleContent = document.getElementById("singleContent");
const doubleContent = document.getElementById("doubleContent");

// Toggle visibility based on selection
function updateSubscriptionView() {
    if (singleRadio.checked) {
        singleContent.classList.add("active");
        doubleContent.classList.remove("active");
    } else {
        doubleContent.classList.add("active");
        singleContent.classList.remove("active");
    }

    updateCartLink();
}

singleRadio.addEventListener("change", updateSubscriptionView);
doubleRadio.addEventListener("change", updateSubscriptionView);

// Add-to-Cart Dynamic Logic
function updateCartLink() {
    let subscriptionType = document.querySelector("input[name='subscription']:checked").value;

    let url = "/cart?subscription=" + subscriptionType;

    if (subscriptionType === "single") {
        let frag = document.querySelector("input[name='single_fragrance']:checked").value;
        url += "&fragrance=" + frag;

    } else {
        let f1 = document.querySelector("input[name='double_f1']:checked").value;
        let f2 = document.querySelector("input[name='double_f2']:checked").value;
        url += "&f1=" + f1 + "&f2=" + f2;
    }

    document.getElementById("addToCartBtn").href = url;
}

// Event listeners for fragrance selections
document.querySelectorAll("input[name='single_fragrance']").forEach(i => i.addEventListener("change", updateCartLink));
document.querySelectorAll("input[name='double_f1']").forEach(i => i.addEventListener("change", updateCartLink));
document.querySelectorAll("input[name='double_f2']").forEach(i => i.addEventListener("change", updateCartLink));

updateSubscriptionView();
updateCartLink();
