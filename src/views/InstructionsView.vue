<template>
  <div class="instructions w-full mx-auto">
    <h1 class="text-2xl font-bold mb-4">Instructions</h1>

    <!-- 自定义的选项卡 -->
    <div class="custom-tabs">
      <div class="tabs-header">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'tab-button',
            { active: activeTab === tab.id },
            { 'required-step': tab.id === 'survey' || tab.id === 'plugin' },
          ]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content">
        <!-- 获取开始的内容 -->
        <div v-if="activeTab === 'getting-started'" class="content">
          <h2>Welcome to our study</h2>
          <ul class="list-disc pl-5">
            <li>
              <span class="important">We invite you to participate in our study if you:</span>
              <ul class="list-disc pl-5 sub-list">
                <li>Are 18+ years old, fluent in English, and currently based in the U.S.</li>
                <li>Can use Google Chrome to shop on Amazon.com and Perplexity.</li>
              </ul>
            </li>
            <li>
              <span class="important">What you need to do:</span>
              <ul class="list-disc pl-5 sub-list">
                <li>
                  <span class="important">1. Online Survey:</span> Complete a survey about your
                  demographics, personality, and shopping habits. The survey may take
                  about 15 minutes.
                </li>
                <li>
                  <span class="important">2. Plugin:</span> Install the ShoppingFlow from the Chrome Web Store and comomplete at least one shopping session on complete two shopping tasks on Amazon Rufus and Perplexity.
                  <span class="important">No personal identifiable information will be
                  collected. </span>
                </li>
                <li>
                  <span class="important">3. Amazon Shopping Tasks:</span> Conduct two shopping tasks on Amazon platforms <span class="important">without checking out the items</span> using Rufus Chatbot and then finish a quick evaluation survey.
                </li>
                <li>
                  <span class="important">4. Perplexity Shopping Tasks:</span> Conduct two shopping tasks on perplexity shopping <span class="important">without checking out the items</span> and then finish a quick evaluation survey.
                </li>
              </ul>
            </li>
            <li>
              <span class="important"> What you will get from Prolific: </span>
              <ul class="list-disc pl-5 sub-list">
                <li>
                  <span class="important"></span> The study takes less than one hour. Your base
                  compensation for the survey will be processed when you click the completion link
                  at the end of the task. 
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- 步骤1的内容 -->
        <div v-if="activeTab === 'plugin-install'" class="content">
          <h2>Plugin Installation</h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Install:</strong>
              <a
                href="https://chromewebstore.google.com/detail/kakkajiejbidhldoklefcgjgjamidpcb?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                >ShoppingFlow Chrome Extension (If the link is not working, try to change your IP
                address to the U.S.)</a
              >
            </li>
            <li><strong>Duration:</strong> Complete at least one shopping session on Amazon.</li>
          </ul>

          <h2>What the plugin does</h2>
          <ul class="list-disc pl-5 sub-list">
            <li>
              Records your shopping behavior on Amazon to help us understand your shopping
              preferences. The plugin does <strong>NOT</strong> collect any personally identifiable
              information (such as your address or payment details).
            </li>
          </ul>

          <h2>Start to use the plugin</h2>
          <ol class="list-decimal pl-5">
            <li>
              <strong>Enter Your User ID</strong>
              <p>
                After installation, enter the User ID you received from the
                <a
                  href="https://neu.co1.qualtrics.com/jfe/form/SV_20jmb6zViDIQ6O2"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Survey</a
                >
                or the one we provided you. If you can't find your ID, please contact us.
              </p>
              <div class="image-container">
                <img
                  src="@/assets/Main_UI.svg"
                  alt="Plugin user ID entry screen"
                  class="instruction-image"
                />
              </div>
            </li>
            <li>
              <strong>Activate the Plugin</strong>
              <p>Reload any open Amazon pages. Then continue shopping as usual.</p>
            </li>
            <li>
              <strong>Answer Occasional Questions</strong>
              <p>You will be prompted to provide reasons for your shopping actions.</p>
              <div class="image-container">
                <img
                  src="@/assets/reason.png"
                  alt="Feedback question popup"
                  class="instruction-image instruction-image-large"
                />
              </div>
            </li>
          </ol>

          <h2>Plugin Features</h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Status Indicator:</strong> The plugin icon is
              <span class="text-gray">gray</span> when inactive and
              <span class="text-red">red</span> when recording.
            </li>
            <li>
              <strong>Progress Indicator:</strong> The plugin displays your total actions recorded
              and weekly statistics including purchases, and reasons.
              <div class="image-container">
                <img
                  src="@/assets/indicator.svg"
                  alt="Progress tracking interface"
                  class="instruction-image instruction-image-large"
                />
              </div>
              <p class="note">
                Note: Purchase data may take up to 10 minutes to update. If you notice any issues,
                please refresh the page or contact us.
              </p>
            </li>
          </ul>

          <h2>Compensation Details</h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Weekly Reward:</strong> $5 Amazon gift card for
              <strong>each eligible week</strong> of participation.
            </li>
            <li>
              <strong>Eligibile Week Requirements:</strong> A week is considered eligible when the
              plugin records at least one purchase and two reasons on Amazon.com. (Excludes Amazon
              Fresh, Pharmacy, Books, Music, Video, etc.)
            </li>
            <li>
              <strong>Bonus Reward:</strong> Complete four eligible weeks in a row to receive an
              additional $10 Amazon gift card.
            </li>
          </ul>
        </div>

        <!-- 步骤2的内容 -->
        <div v-if="activeTab === 'amazon-shopping'" class="content">
          <h2>Login your Amazon.com to finish task 1</h2>
          <ul class="list-disc pl-5">
            You are setting up a workspace at home and need to purchase a monitor. Your total budget is $250. Your criterias are:
            <li>Highest resolution possible (4K or better)</li>
            <li>Compact size to save desk space </li>
            <li>This monitor is good for work, gaming and video editing.</li>
          </ul>
          <h2>Login your Amazon.com to finish task 2</h2>
          <ul class="list-disc pl-5">
            You’re invited to a summer wedding and are looking to explore clothing options for the event. You already have some clothes but want to see if there’s anything better within your $200 budget. Your goals are:
            <li>The theme for the wedding is green and the vibe is bright</li>
            <li>Stylish, seasonally appropriate options.</li>
            <li>Explore alternatives to the current wardrobe</li>
          </ul>
          <h2>Complete this survey to get your reward</h2>
              <a
                href="https://neu.co1.qualtrics.com/jfe/form/SV_20jmb6zViDIQ6O2"
                target="_blank"
                rel="noopener noreferrer"
                >surveylink</a>
        </div>

      <!-- 步骤4的内容 -->
      <div v-if="activeTab === 'perplexity-shopping'" class="content">
        <h2>Optional Interview:</h2>
        <ul class="list-disc pl-5">
          <li>
            Click to
            <a
              href="https://outlook.office.com/bookwithme/user/c9066727be114e94850683ba61b854f1@northeastern.edu/meetingtype/azBPtEDaNUKcKyQ0Sl0i8Q2?anonymous&ep=mlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              book an interview</a
            >
            (If the link is not working, try in incognito/private mode or contact us)
          </li>
          <li>It takes about 20 mins.</li>
          <li>You will receive an additional $10 Amazon gift card.</li>
        </ul>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

// 定义选项卡
const tabs = [
  { id: 'getting-started', label: 'Step 1: User Persona Survey' },
  { id: 'plugin-install', label: 'Step 2: Install Plugin' },
  { id: 'amazon-shopping', label: 'Step 3: Two tasks on Amazon' },
  { id: 'perplexity-shopping', label: 'Step 4: Two tasks on Perplexity' },
  // { id: 'perplexity-survey', label: 'Step 5: Post Survey' },
]

// Bind activeTab to 'tab' query parameter
const params = useUrlSearchParams('history')
const defaultTab = 'getting-started'

// Set up the activeTab with a two-way binding to URL
const activeTab = ref(
  // Use the tab from URL if it exists and is valid, otherwise use default
  tabs.some((tab) => tab.id === params.tab) ? params.tab : defaultTab,
)

// Watch for changes to activeTab and update URL
// This will happen automatically since useUrlSearchParams creates a reactive object
// that updates the URL when its properties change
// Using a direct watch to make sure the tab parameter is valid
watch(activeTab, (newVal) => {
  params.tab = newVal
})
</script>

<style scoped>
.instructions {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* 自定义选项卡样式 */
.custom-tabs {
  margin-top: 1rem;
  width: 100%;
}

.tabs-header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.5rem;
  width: 100%;
}

.tab-button {
  padding: 1rem 1.5rem;
  background-color: #f3f3f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  text-align: center;
  font-size: 1.1rem;
  flex: 1;
  min-width: 0;
}

.tab-button.active {
  background-color: #77a8f5;
  color: white;
}

.tab-content {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .tabs-header {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    flex: 1 0 calc(50% - 0.5rem);
    max-width: calc(50% - 0.25rem);
  }

  /* 添加小屏幕下的字体大小调整 */
  .content {
    font-size: 0.95rem;
    padding: 1.5rem;
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.4rem;
    margin: 1.5rem 0 0.8rem 0;
  }

  .important {
    font-size: 0.95rem;
  }

  li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .tab-button {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  /* 为更小屏幕进一步减小字体 */
  .content {
    font-size: 0.9rem;
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .instruction-image {
    max-width: 50%;
  }

  .instruction-image-large {
    max-width: 80%;
  }
}

.content {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
  font-size: 1.1rem;
}

ol,
ul {
  padding-left: 1.5rem;
  line-height: 1.6;
}

li {
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}
.important {
  font-weight: 700;
  color: #333;
}
.bullet-point {
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.image-step {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
}

.instruction-image {
  max-width: 30%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  display: block;
}

.instruction-image-large {
  max-width: 60%;
}

.text-red {
  color: #ff4d4f;
  font-weight: 600;
}
.text-gray {
  color: #666;
  font-weight: 600;
}

.sub-list {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.sub-list li {
  margin-bottom: 0.3rem;
}

.content a {
  color: #77a8f5;
  text-decoration: none;
  padding: 3px;
  transition: 0.3s;
}

.content a:hover {
  text-decoration: underline;
  color: #5f83d2;
  background-color: transparent;
}

h2 {
  font-size: 1.7rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: #333;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 0.5rem;
}

ol {
  counter-reset: item;
  padding-left: 0;
}

ol li {
  display: block;
  margin-bottom: 1.5rem;
  position: relative;
}

ol li:before {
  content: counter(item) '';
  counter-increment: item;
  background: #77a8f5;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  font-weight: bold;
}

.image-container {
  margin: 1rem 0;
  text-align: center;
}

.note {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-top: 0.5rem;
}

strong {
  font-weight: 600;
  color: #333;
}

.content p {
  font-size: 1rem;
  font-weight: normal;
  margin: 0.5rem 0;
  color: #555;
  line-height: 1.5;
}

.content ul li,
.content ol li {
  margin-bottom: 1rem;
}

.tab-button.required-step {
  background-color: #ffece0;
  border: 2px solid #ff9966;
  font-weight: 600;
  color: #d14800;
  position: relative;
}

.tab-button.required-step:after {
  content: 'Required';
  position: absolute;
  top: -8px;
  right: 10px;
  background-color: #ff6633;
  color: white;
  font-size: 0.6rem;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: bold;
}

.tab-button.required-step.active {
  background-color: #ff6633;
  border-color: #ff6633;
  color: white;
}
</style>
