# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility (axe-core, WCAG 2 A/AA) >> no serious or critical violations — SK
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: axe violations (sk):
• [serious] color-contrast: Elements must meet minimum color contrast ratio thresholds (1 node/s)

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 58

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#0a2540",
+               "contrastRatio": 1.03,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#0e2843",
+               "fontSize": "8.3pt (11px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.03 (foreground color: #0e2843, background color: #0a2540, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"boot\" id=\"boot\">",
+                 "target": Array [
+                   "#boot",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.03 (foreground color: #0e2843, background color: #0a2540, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>loading test framework</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".boot-line:nth-child(2) > span:nth-child(2)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic:
      - generic: Q
      - generic: A
      - generic: V
      - generic: A
      - generic: "N"
      - generic: T
    - generic: qavant.dev · loading
  - generic:
    - generic:
      - generic:
        - generic: $
        - generic: initializing qavant.dev
      - generic:
        - generic: ✓
        - generic: loading test framework
      - generic:
        - generic: ✓
        - generic: connecting to fintech mainframe
      - generic:
        - generic: ✓
        - generic: spinning up quality assurance
  - banner:
    - generic [ref=e2]:
      - link "qavant — home" [ref=e3]:
        - /url: "#top"
        - generic [ref=e4]: Q
        - generic [ref=e5]: A
        - generic [ref=e6]: V
        - generic [ref=e7]: A
        - generic [ref=e8]: "N"
        - generic [ref=e9]: T
      - navigation [ref=e11]:
        - group "Language" [ref=e12]:
          - button "SK" [ref=e13]
          - button "EN" [pressed] [ref=e14]
          - button "DE" [ref=e15]
  - generic [ref=e18]:
    - generic [ref=e19]:
      - generic [ref=e22]: QA Engineering · Bratislava · Available now
      - heading "Stress-free release. QA has your back." [level=1] [ref=e23]:
        - generic [ref=e25]: Stress-free
        - generic [ref=e27]: release.
        - emphasis [ref=e28]:
          - generic [ref=e30]: QA
          - generic [ref=e32]: has your back.
      - paragraph [ref=e33]: I'm Peter Oláh. As a freelance QA automation engineer, I bring calm to projects. Three years in the Slovak banking sector taught me to build frameworks that survive any Friday deployment and surface the details everyone else missed.
      - generic [ref=e34]:
        - link "Start a project →" [ref=e35]:
          - /url: "#contact"
          - generic [ref=e36]: Start a project
          - generic [ref=e37]: →
        - link "See services" [ref=e38]:
          - /url: "#services"
          - generic [ref=e39]: See services
      - link "ISTQB® Certified Tester CTFL v4 · č. 2024-01382" [ref=e40]:
        - /url: https://scr.istqb.org/
        - img [ref=e42]
        - generic [ref=e49]:
          - generic [ref=e50]: ISTQB® Certified Tester
          - generic [ref=e51]: CTFL v4 · č. 2024-01382
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e56]: UI tests · Playwright
          - generic [ref=e57]: 210/210
          - generic [ref=e58]: 100% · 9 runs
        - generic [ref=e59]:
          - generic [ref=e62]: API tests · Newman
          - generic [ref=e63]: 27/27
          - generic [ref=e64]: 100% · 5 runs
        - generic [ref=e65]:
          - generic [ref=e68]: Status
          - generic [ref=e70]:
            - text: ●
            - generic [ref=e71]: Available
          - generic [ref=e72]: from June 2026
    - generic [ref=e73]:
      - generic [ref=e78]: qavant — playwright-runner — 80×24
      - generic [ref=e79]:
        - generic [ref=e80]: $ npx playwright test
        - generic [ref=e81]: Running 140 tests using 2 workers · 5 browsers
        - generic [ref=e82]: › smoke › skeleton is intact............PASS 3.1s
        - generic [ref=e83]: › i18n › SK/EN/DE completeness..........PASS 11.4s
        - generic [ref=e84]: › a11y › axe-core WCAG 2 AA.............FAIL contrast 3.43
  - generic [ref=e86]:
    - generic [ref=e87]:
      - generic [ref=e88]: SELENIUM
      - generic [ref=e89]: ✦
      - generic [ref=e90]: PLAYWRIGHT
      - generic [ref=e91]: ✦
      - generic [ref=e92]: JAVA
      - generic [ref=e93]: ✦
      - generic [ref=e94]: TYPESCRIPT
      - generic [ref=e95]: ✦
      - generic [ref=e96]: REST ASSURED
      - generic [ref=e97]: ✦
      - generic [ref=e98]: CYPRESS
      - generic [ref=e99]: ✦
      - generic [ref=e100]: APPIUM
      - generic [ref=e101]: ✦
      - generic [ref=e102]: ALLURE
      - generic [ref=e103]: ✦
      - generic [ref=e104]: JENKINS
      - generic [ref=e105]: ✦
      - generic [ref=e106]: GITLAB CI
      - generic [ref=e107]: ✦
      - generic [ref=e108]: FINTECH
      - generic [ref=e109]: ✦
      - generic [ref=e110]: ISTQB
      - generic [ref=e111]: ✦
    - generic [ref=e112]:
      - generic [ref=e113]: SELENIUM
      - generic [ref=e114]: ✦
      - generic [ref=e115]: PLAYWRIGHT
      - generic [ref=e116]: ✦
      - generic [ref=e117]: JAVA
      - generic [ref=e118]: ✦
      - generic [ref=e119]: TYPESCRIPT
      - generic [ref=e120]: ✦
      - generic [ref=e121]: REST ASSURED
      - generic [ref=e122]: ✦
      - generic [ref=e123]: CYPRESS
      - generic [ref=e124]: ✦
      - generic [ref=e125]: APPIUM
      - generic [ref=e126]: ✦
      - generic [ref=e127]: ALLURE
      - generic [ref=e128]: ✦
      - generic [ref=e129]: JENKINS
      - generic [ref=e130]: ✦
      - generic [ref=e131]: GITLAB CI
      - generic [ref=e132]: ✦
      - generic [ref=e133]: FINTECH
      - generic [ref=e134]: ✦
      - generic [ref=e135]: ISTQB
      - generic [ref=e136]: ✦
  - generic [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - text: "[ 01 /"
        - generic [ref=e141]: Services
        - text: "]"
      - heading "Three ways I can help." [level=2] [ref=e142]:
        - text: Three ways
        - emphasis [ref=e143]: I can help.
    - generic [ref=e144]:
      - generic [ref=e145]:
        - generic [ref=e146]: 001 / 003
        - img [ref=e148]
        - heading "Test Automation Framework" [level=3] [ref=e151]
        - paragraph [ref=e152]: I build maintainable frameworks from scratch — Page Object Model, clean wait strategies, CI integration, and reports nobody hates reading at code review.
        - list [ref=e153]:
          - listitem [ref=e154]: → Selenium / Playwright
          - listitem [ref=e155]: → Page Object Model
          - listitem [ref=e156]: → Allure + CI integration
      - generic [ref=e157]:
        - generic [ref=e158]: 002 / 003
        - img [ref=e160]
        - heading "API & Regression Testing" [level=3] [ref=e163]
        - paragraph [ref=e164]: REST Assured, contract tests, and regression that catches issues before users do. Focused on fintech flows — payments, auth, 2FA, edge cases.
        - list [ref=e165]:
          - listitem [ref=e166]: → REST Assured / Postman
          - listitem [ref=e167]: → Contract testing
          - listitem [ref=e168]: → Test data management
      - generic [ref=e169]:
        - generic [ref=e170]: 003 / 003
        - img [ref=e172]
        - heading "QA Audit & Consulting" [level=3] [ref=e175]
        - paragraph [ref=e176]: I'll review your test setup, surface flaky tests, point out where it's looking the wrong way, and give you a plan to fix it without rewriting everything.
        - list [ref=e177]:
          - listitem [ref=e178]: → Test strategy review
          - listitem [ref=e179]: → Flaky tests audit
          - listitem [ref=e180]: → QA process design
    - generic [ref=e182]:
      - generic [ref=e183]:
        - generic [ref=e184]: SOUNDS LIKE A FIT?
        - heading "30-minute discovery call. Free." [level=3] [ref=e185]
        - paragraph [ref=e186]: No pitch deck, no sales. Just a conversation about your project and what could be improved.
      - link "Send a message →" [ref=e187]:
        - /url: "#contact"
        - generic [ref=e188]: Send a message
        - generic [ref=e189]: →
  - generic [ref=e190]: ✦
  - generic [ref=e192]:
    - generic [ref=e193]:
      - generic [ref=e194]:
        - text: "[ 02 /"
        - generic [ref=e195]: Framework
        - text: "]"
      - heading "A look under the hood." [level=2] [ref=e196]:
        - text: A look
        - emphasis [ref=e197]: under the hood.
      - paragraph [ref=e198]: A sample of the structure I use when building automation frameworks. The real code in client projects is richer with domain logic — this is a sanitized demo version.
    - generic [ref=e199]:
      - button "Selenium Java" [ref=e200] [cursor=pointer]:
        - img [ref=e202]
        - text: Selenium Java
      - button "REST API" [ref=e205] [cursor=pointer]:
        - img [ref=e207]
        - text: REST API
      - button "Playwright TS" [ref=e209] [cursor=pointer]:
        - img [ref=e211]
        - text: Playwright TS
    - generic [ref=e214]:
      - generic [ref=e215]:
        - generic [ref=e219]: qavant-selenium — IntelliJ IDEA
        - link "GitHub ↗" [ref=e220]:
          - /url: https://github.com/peterolah-qa/qavant-selenium
        - group "View mode" [ref=e221]:
          - button "Code" [ref=e222] [cursor=pointer]:
            - img [ref=e223]
            - generic [ref=e226]: Code
          - button "Architecture" [ref=e227] [cursor=pointer]:
            - img [ref=e228]
            - generic [ref=e233]: Architecture
      - generic [ref=e234]:
        - complementary "Project file tree" [ref=e235]:
          - generic [ref=e237] [cursor=pointer]:
            - img [ref=e238]
            - generic [ref=e241]: DriverFactory.java
          - generic [ref=e242]:
            - text: ·
            - generic [ref=e243] [cursor=pointer]:
              - img [ref=e244]
              - generic [ref=e247]: BasePage.java
            - generic [ref=e248] [cursor=pointer]:
              - img [ref=e249]
              - generic [ref=e252]: HomePage.java
          - generic [ref=e253]:
            - text: ·
            - generic [ref=e254] [cursor=pointer]:
              - img [ref=e255]
              - generic [ref=e258]: SmokeTests.java
            - generic [ref=e259] [cursor=pointer]:
              - img [ref=e260]
              - generic [ref=e263]: CertBadgeTests.java
        - generic [ref=e264]:
          - generic [ref=e268]: BasePage.java
          - generic [ref=e270]:
            - generic [ref=e274]: /**
            - generic [ref=e276]: "* Explicit waits only — no Thread.sleep() anywhere in this codebase."
            - generic [ref=e278]: "* Every action waits for exactly the condition it needs."
            - generic [ref=e280]: "*/"
            - generic [ref=e282]: "public abstract class BasePage {"
            - generic [ref=e286]: protected final WebDriver driver;
            - generic [ref=e288]: protected final WebDriverWait wait;
            - generic [ref=e292]: "protected BasePage(WebDriver driver) {"
            - generic [ref=e294]: this.driver = driver;
            - generic [ref=e296]: this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            - generic [ref=e298]: "}"
            - generic [ref=e302]: "protected WebElement visible(By locator) {"
            - generic [ref=e304]: return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
            - generic [ref=e306]: "}"
            - generic [ref=e310]: "protected WebElement present(By locator) {"
            - generic [ref=e312]: return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
            - generic [ref=e314]: "}"
            - generic [ref=e318]: "protected WebElement clickable(By locator) {"
            - generic [ref=e320]: return wait.until(ExpectedConditions.elementToBeClickable(locator));
            - generic [ref=e322]: "}"
            - generic [ref=e326]: /**
            - generic [ref=e328]: "* Scrolls an element into the viewport the way a user would."
            - generic [ref=e330]: "* The site reveals below-the-fold content via IntersectionObserver"
            - generic [ref=e332]: "* (elements start at opacity 0), so anything outside the initial"
          - generic [ref=e333]:
            - generic [ref=e334]: ● Java 17 · Selenium 4 · TestNG · Maven
            - generic [ref=e335]: 31 lines · UTF-8 · LF
    - generic [ref=e336]:
      - generic [ref=e337]:
        - img [ref=e339]
        - heading "Page Object Model" [level=4] [ref=e344]
        - paragraph [ref=e345]: Each application page is its own class. Tests never look up elements directly — that's the page object's job.
      - generic [ref=e346]:
        - img [ref=e348]
        - heading "Explicit Waits Only" [level=4] [ref=e350]
        - paragraph [ref=e351]: "No Thread.sleep(). Every action waits exactly for what it needs. Result: tests run faster and don't fail randomly."
      - generic [ref=e352]:
        - img [ref=e354]
        - heading "CI-First Architecture" [level=4] [ref=e357]
        - paragraph [ref=e358]: The framework is designed for Jenkins/GitLab CI first, not local development. Allure reports, parallel runs, retry logic.
    - generic [ref=e359]:
      - generic [ref=e360]: Java 17
      - generic [ref=e361]: Selenium 4.x
      - generic [ref=e362]: TestNG
      - generic [ref=e363]: Maven
      - generic [ref=e364]: Page Factory
      - generic [ref=e365]: Allure
      - generic [ref=e366]: WebDriverManager
      - generic [ref=e367]: Log4j2
      - generic [ref=e368]: Jenkins / GitLab CI
  - paragraph [ref=e370]:
    - generic [ref=e371]: 99% of test frameworks fail
    - generic [ref=e372]: not because the code is bad.
    - emphasis [ref=e373]: They fail because nobody understands them.
  - generic [ref=e374]: ✦
  - generic [ref=e375]:
    - generic [ref=e376]:
      - generic [ref=e377]:
        - generic [ref=e378]:
          - text: "[ 03 /"
          - generic [ref=e379]: Background
          - text: "]"
        - heading "Three years in banks taught me one thing." [level=2] [ref=e380]:
          - text: Three years in banks
          - emphasis [ref=e381]: taught me one thing.
      - generic [ref=e382]:
        - generic [ref=e383]:
          - paragraph [ref=e384]: I'm Peter Oláh. For the past three years I tested banking applications at ČSOB and VÚB — where behind every transaction there is real money belonging to real people.
          - generic [ref=e385]:
            - text: "\"For me, quality isn't a goal — it's"
            - emphasis [ref=e386]: a standard I don't compromise on.
            - text: "\""
          - paragraph [ref=e387]: ISTQB CTFL v4 certified, working as a freelancer (IČO), specialized in fintech. Qavant is my platform — where I do work I'm proud of and choose who I collaborate with.
          - paragraph [ref=e388]: Attention to detail is a professional habit for me, not suffering. In QA, it's a surprising competitive edge.
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - text: "0"
              - emphasis [ref=e392]: +
            - generic [ref=e393]: Years in fintech QA
          - generic [ref=e394]:
            - generic [ref=e395]: ISTQB
            - generic [ref=e396]: ISTQB CTFL v4
          - generic [ref=e397]:
            - generic [ref=e398]: "0"
            - generic [ref=e399]: Banks · ČSOB & VÚB
          - generic [ref=e400]:
            - generic [ref=e401]: "0"
            - generic [ref=e402]: Production incidents on my watch
    - link "Peter Oláh na LinkedIn" [ref=e404]:
      - /url: https://www.linkedin.com/in/peter-olah-8ab858137/
      - img [ref=e406]
      - generic [ref=e408]:
        - generic [ref=e409]: Let's connect
        - generic [ref=e410]: Peter Oláh
        - generic [ref=e411]: linkedin.com/in/peter-olah
  - generic [ref=e412]: ✦
  - generic [ref=e415]:
    - text: “
    - generic [ref=e417]: Manifesto
    - paragraph [ref=e418]:
      - text: For me, QA is not about automation and tools. Those change.
      - emphasis [ref=e419]: It's about responsibility to the user and respect for the team's work.
      - text: I am here to make complex things reliable.
    - generic [ref=e421]: Peter · Qavant
    - generic [ref=e422]:
      - generic [ref=e423]:
        - generic [ref=e424]: "01"
        - heading "Detail is the craft" [level=5] [ref=e425]
        - paragraph [ref=e426]: Every missed bug is someone's bad day. I take it personally.
      - generic [ref=e427]:
        - generic [ref=e428]: "02"
        - heading "No vendor lock-in" [level=5] [ref=e429]
        - paragraph [ref=e430]: Your framework, your code. If I leave, your team keeps shipping without a hiccup.
      - generic [ref=e431]:
        - generic [ref=e432]: "03"
        - heading "Predictable over fast" [level=5] [ref=e433]
        - paragraph [ref=e434]: Slower and stable beats fast and flaky. Long-term, it always pays off.
      - generic [ref=e435]:
        - generic [ref=e436]: "04"
        - heading "Honest work, honest pricing" [level=5] [ref=e437]
        - paragraph [ref=e438]: Fixed prices, clear scope, no hourly invoices with end-of-month surprises.
  - generic [ref=e439]: ✦
  - generic [ref=e441]:
    - generic [ref=e442]:
      - generic [ref=e443]:
        - text: "[ 04 /"
        - generic [ref=e444]: How we work
        - text: "]"
      - heading "No surprises. Predictable process." [level=2] [ref=e445]:
        - text: No surprises.
        - emphasis [ref=e446]: Predictable process.
      - paragraph [ref=e447]: Four clear steps from first email to handover. You know what happens when, I know what's expected of me. No black-box freelancer.
    - generic [ref=e448]:
      - generic [ref=e449]:
        - generic [ref=e450]:
          - generic [ref=e451]: "01"
          - generic [ref=e452]: / 04
        - heading "Discovery" [level=4] [ref=e453]
        - paragraph [ref=e454]: 30-minute call about your project. What's the stack, what's the pain, what's the goal. No commitment, no invoice — I want to know if we can help each other.
        - generic [ref=e455]: ⏱ 30 min · free
        - text: ↓
      - generic [ref=e456]:
        - generic [ref=e457]:
          - generic [ref=e458]: "02"
          - generic [ref=e459]: / 04
        - heading "Audit & Plan" [level=4] [ref=e460]
        - paragraph [ref=e461]: I review your code and CI. You receive a written audit with findings and an implementation plan — scope, timeline, fixed price.
        - generic [ref=e462]: ⏱ 3–5 days
        - text: ↓
      - generic [ref=e463]:
        - generic [ref=e464]:
          - generic [ref=e465]: "03"
          - generic [ref=e466]: / 04
        - heading "Build" [level=4] [ref=e467]
        - paragraph [ref=e468]: Framework build, CI integration, first tests. Weekly check-ins, Friday demos, code in the repo from day one.
        - generic [ref=e469]: ⏱ 2–6 weeks
        - text: ↓
      - generic [ref=e470]:
        - generic [ref=e471]:
          - generic [ref=e472]: "04"
          - generic [ref=e473]: / 04
        - heading "Handover" [level=4] [ref=e474]
        - paragraph [ref=e475]: Documentation, video walkthrough, team onboarding. 30 days of free support. Your framework, your code, no vendor lock-in.
        - generic [ref=e476]: ⏱ 1 week + 30 days
    - generic [ref=e478]:
      - generic [ref=e479]:
        - generic [ref=e480]: READY TO START?
        - heading "You know what I do. You know how I work." [level=3] [ref=e481]
        - paragraph [ref=e482]: The last step is simple — drop me a few lines about your project.
      - link "Let's talk →" [ref=e483]:
        - /url: "#contact"
        - generic [ref=e484]: Let's talk
        - generic [ref=e485]: →
  - generic [ref=e489]:
    - generic [ref=e490]:
      - generic [ref=e491]:
        - text: "[ 05 /"
        - generic [ref=e492]: Contact
        - text: "]"
      - heading "Stick around. It gets interesting." [level=2] [ref=e493]:
        - text: Stick around.
        - emphasis [ref=e494]: It gets interesting.
      - paragraph [ref=e495]: Drop me a few lines about your project. I usually reply within 24 hours, often sooner.
      - generic [ref=e496]:
        - generic [ref=e497]:
          - generic [ref=e498]: Email
          - generic [ref=e499]: peterolah@qavant.dev
        - generic [ref=e500]:
          - generic [ref=e501]: Location
          - generic [ref=e502]: Bratislava · Remote
        - generic [ref=e503]:
          - generic [ref=e504]: Languages
          - generic [ref=e505]: SK · EN · DE
        - generic [ref=e506]:
          - generic [ref=e507]: Status
          - generic [ref=e508]:
            - text: ●
            - generic [ref=e509]: Accepting projects
    - generic [ref=e510]:
      - paragraph [ref=e511]:
        - generic [ref=e512]:
          - text: "Nevypĺňaj:"
          - textbox "Nevypĺňaj:" [ref=e513]
      - generic [ref=e514]:
        - generic [ref=e515]:
          - generic [ref=e516]: Name
          - textbox "Name" [ref=e517]
        - generic [ref=e518]:
          - generic [ref=e519]: Email
          - textbox "Email" [ref=e520]
      - generic [ref=e521]:
        - generic [ref=e522]: Company (optional)
        - textbox "Company (optional)" [ref=e523]
      - generic [ref=e524]:
        - generic [ref=e525]: I'm interested in
        - combobox "I'm interested in" [ref=e526]:
          - option "Test automation framework" [selected]
          - option "API / regression testing"
          - option "QA audit / consulting"
          - option "Request framework sample (GitHub access)"
          - option "Something else — I'll explain"
      - generic [ref=e527]:
        - generic [ref=e528]: Message
        - textbox "Message" [ref=e529]
      - generic [ref=e530]:
        - generic [ref=e531]: No spam. No bots. Just me.
        - button "Send message →" [ref=e532]:
          - generic [ref=e533]: Send message
          - generic [ref=e534]: →
  - contentinfo [ref=e535]:
    - generic [ref=e536]:
      - generic [ref=e537]:
        - generic [ref=e538]:
          - text: © 2026 Qavant —
          - emphasis [ref=e539]: crafted in Bratislava
        - generic [ref=e540]:
          - link "peterolah@qavant.dev" [ref=e541]:
            - /url: mailto:peterolah@qavant.dev
          - generic [ref=e542]: ·
          - link "LinkedIn" [ref=e543]:
            - /url: https://www.linkedin.com/in/peter-olah-8ab858137/
          - generic [ref=e544]: ·
          - link "GitHub" [ref=e545]:
            - /url: https://github.com/peterolah-qa
      - generic [ref=e546]:
        - link "Privacy Policy" [ref=e547]:
          - /url: /privacy
        - link "Impressum" [ref=e548]:
          - /url: /impressum
        - generic [ref=e549]: ●This site uses no cookies
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | import { SEL, LANGS } from './fixtures/constants';
  4  | 
  5  | /**
  6  |  * Automated WCAG checks with axe-core. We gate on serious/critical impact —
  7  |  * the violations that actually lock people out — and scan every language,
  8  |  * since translated content can introduce its own contrast/label issues.
  9  |  *
  10 |  * The decorative WebGL canvas is excluded: it is aria-hidden by design.
  11 |  */
  12 | test.describe('Accessibility (axe-core, WCAG 2 A/AA)', () => {
  13 |   for (const lang of LANGS) {
  14 |     test(`no serious or critical violations — ${lang.toUpperCase()}`, async ({ page }) => {
  15 |       await page.goto('/');
  16 |       if (lang !== 'sk') {
  17 |         await page.locator(SEL.langButton(lang)).click();
  18 |         await expect(page.locator(SEL.langButton(lang))).toHaveClass(/active/);
  19 |       }
  20 | 
  21 |       const results = await new AxeBuilder({ page })
  22 |         .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  23 |         .exclude(SEL.heroCanvas)
  24 |         .analyze();
  25 | 
  26 |       const blocking = results.violations.filter(
  27 |         (v) => v.impact === 'serious' || v.impact === 'critical',
  28 |       );
  29 | 
  30 |       // Helpful failure output: which rule, where.
  31 |       const summary = blocking
  32 |         .map((v) => `• [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node/s)`)
  33 |         .join('\n');
  34 | 
> 35 |       expect(blocking, `axe violations (${lang}):\n${summary}`).toEqual([]);
     |                                                                 ^ Error: axe violations (sk):
  36 |     });
  37 |   }
  38 | 
  39 |   test('document exposes a language and a single H1', async ({ page }) => {
  40 |     await page.goto('/');
  41 |     await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
  42 |     expect(await page.locator('h1').count(), 'exactly one H1 for structure').toBe(1);
  43 |   });
  44 | });
  45 | 
```