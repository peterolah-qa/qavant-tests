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
• [serious] color-contrast: Elements must meet minimum color contrast ratio thresholds (2 node/s)

expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 117

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
+               "bgColor": "#10213d",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f87a3",
+               "fontSize": "6.8pt (9px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #6f87a3, background color: #10213d, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"metric\">",
+                 "target": Array [
+                   ".metric:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"metrics reveal in\" id=\"liveMetrics\">",
+                 "target": Array [
+                   "#liveMetrics",
+                 ],
+               },
+               Object {
+                 "html": "<body>",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #6f87a3, background color: #10213d, font size: 6.8pt (9px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span data-i18n=\"m.status\">Status</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "span[data-i18n=\"m.status\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#10213d",
+               "contrastRatio": 4.33,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#6f87a3",
+               "fontSize": "7.5pt (10px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.33 (foreground color: #6f87a3, background color: #10213d, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"metric\">",
+                 "target": Array [
+                   ".metric:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"metrics reveal in\" id=\"liveMetrics\">",
+                 "target": Array [
+                   "#liveMetrics",
+                 ],
+               },
+               Object {
+                 "html": "<body>",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.33 (foreground color: #6f87a3, background color: #10213d, font size: 7.5pt (10px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"metric-trend\" data-i18n=\"m.from\">from June 2026</div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "div[data-i18n=\"m.from\"]",
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
      - link "qavant — home" [ref=e3] [cursor=pointer]:
        - /url: "#top"
        - generic [ref=e4]: Q
        - generic [ref=e5]: A
        - generic [ref=e6]: V
        - generic [ref=e7]: A
        - generic [ref=e8]: "N"
        - generic [ref=e9]: T
      - navigation [ref=e10]:
        - group "Language" [ref=e11]:
          - button "SK" [ref=e12]
          - button "EN" [pressed] [ref=e13]
          - button "DE" [ref=e14]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - generic [ref=e21]: QA Engineering · Bratislava · Available now
      - heading "Stress-free release. QA has your back." [level=1] [ref=e22]:
        - generic [ref=e24]: Stress-free
        - generic [ref=e26]: release.
        - emphasis [ref=e27]:
          - generic [ref=e29]: QA
          - generic [ref=e31]: has your back.
      - paragraph [ref=e32]: I'm Peter Oláh. As a freelance QA automation engineer, I bring calm to projects. Three years in the Slovak banking sector taught me to build frameworks that survive any Friday deployment and surface the details everyone else missed.
      - generic [ref=e33]:
        - link "Start a project →" [ref=e34]:
          - /url: "#contact"
          - generic [ref=e35]: Start a project
          - generic [ref=e36]: →
        - link "See services" [ref=e37]:
          - /url: "#services"
          - generic [ref=e38]: See services
      - link "ISTQB® Certified Tester CTFL v4 · č. 2024-01382" [ref=e39] [cursor=pointer]:
        - /url: https://scr.istqb.org/
        - img [ref=e41]
        - generic [ref=e48]:
          - generic [ref=e49]: ISTQB® Certified Tester
          - generic [ref=e50]: CTFL v4 · č. 2024-01382
      - generic [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e55]: UI tests · Playwright
          - generic [ref=e56]: 208/210
          - generic [ref=e57]: 99% · 14 runs
        - generic [ref=e58]:
          - generic [ref=e61]: API tests · Newman
          - generic [ref=e62]: 27/27
          - generic [ref=e63]: 100% · 11 runs
        - generic [ref=e64]:
          - generic [ref=e67]: Status
          - generic [ref=e69]:
            - text: ●
            - generic [ref=e70]: Available
          - generic [ref=e71]: from June 2026
    - generic [ref=e77]: qavant — playwright-runner — 80×24
  - generic [ref=e80]:
    - generic [ref=e81]:
      - generic [ref=e82]: SELENIUM
      - generic [ref=e83]: ✦
      - generic [ref=e84]: PLAYWRIGHT
      - generic [ref=e85]: ✦
      - generic [ref=e86]: JAVA
      - generic [ref=e87]: ✦
      - generic [ref=e88]: TYPESCRIPT
      - generic [ref=e89]: ✦
      - generic [ref=e90]: REST ASSURED
      - generic [ref=e91]: ✦
      - generic [ref=e92]: CYPRESS
      - generic [ref=e93]: ✦
      - generic [ref=e94]: APPIUM
      - generic [ref=e95]: ✦
      - generic [ref=e96]: ALLURE
      - generic [ref=e97]: ✦
      - generic [ref=e98]: JENKINS
      - generic [ref=e99]: ✦
      - generic [ref=e100]: GITLAB CI
      - generic [ref=e101]: ✦
      - generic [ref=e102]: FINTECH
      - generic [ref=e103]: ✦
      - generic [ref=e104]: ISTQB
      - generic [ref=e105]: ✦
    - generic [ref=e106]:
      - generic [ref=e107]: SELENIUM
      - generic [ref=e108]: ✦
      - generic [ref=e109]: PLAYWRIGHT
      - generic [ref=e110]: ✦
      - generic [ref=e111]: JAVA
      - generic [ref=e112]: ✦
      - generic [ref=e113]: TYPESCRIPT
      - generic [ref=e114]: ✦
      - generic [ref=e115]: REST ASSURED
      - generic [ref=e116]: ✦
      - generic [ref=e117]: CYPRESS
      - generic [ref=e118]: ✦
      - generic [ref=e119]: APPIUM
      - generic [ref=e120]: ✦
      - generic [ref=e121]: ALLURE
      - generic [ref=e122]: ✦
      - generic [ref=e123]: JENKINS
      - generic [ref=e124]: ✦
      - generic [ref=e125]: GITLAB CI
      - generic [ref=e126]: ✦
      - generic [ref=e127]: FINTECH
      - generic [ref=e128]: ✦
      - generic [ref=e129]: ISTQB
      - generic [ref=e130]: ✦
  - generic [ref=e132]:
    - generic [ref=e133]:
      - generic [ref=e134]:
        - text: "[ 01 /"
        - generic [ref=e135]: Services
        - text: "]"
      - heading "Three ways I can help." [level=2] [ref=e136]:
        - text: Three ways
        - emphasis [ref=e137]: I can help.
    - generic [ref=e138]:
      - generic [ref=e139]:
        - generic [ref=e140]: 001 / 003
        - img [ref=e142]
        - heading "Test Automation Framework" [level=3] [ref=e145]
        - paragraph [ref=e146]: I build maintainable frameworks from scratch — Page Object Model, clean wait strategies, CI integration, and reports nobody hates reading at code review.
        - list [ref=e147]:
          - listitem [ref=e148]: → Selenium / Playwright
          - listitem [ref=e149]: → Page Object Model
          - listitem [ref=e150]: → Allure + CI integration
      - generic [ref=e151]:
        - generic [ref=e152]: 002 / 003
        - img [ref=e154]
        - heading "API & Regression Testing" [level=3] [ref=e157]
        - paragraph [ref=e158]: REST Assured, contract tests, and regression that catches issues before users do. Focused on fintech flows — payments, auth, 2FA, edge cases.
        - list [ref=e159]:
          - listitem [ref=e160]: → REST Assured / Postman
          - listitem [ref=e161]: → Contract testing
          - listitem [ref=e162]: → Test data management
      - generic [ref=e163]:
        - generic [ref=e164]: 003 / 003
        - img [ref=e166]
        - heading "QA Audit & Consulting" [level=3] [ref=e169]
        - paragraph [ref=e170]: I'll review your test setup, surface flaky tests, point out where it's looking the wrong way, and give you a plan to fix it without rewriting everything.
        - list [ref=e171]:
          - listitem [ref=e172]: → Test strategy review
          - listitem [ref=e173]: → Flaky tests audit
          - listitem [ref=e174]: → QA process design
    - generic [ref=e176]:
      - generic [ref=e177]:
        - generic [ref=e178]: SOUNDS LIKE A FIT?
        - heading "30-minute discovery call. Free." [level=3] [ref=e179]
        - paragraph [ref=e180]: No pitch deck, no sales. Just a conversation about your project and what could be improved.
      - link "Send a message →" [ref=e181]:
        - /url: "#contact"
        - generic [ref=e182]: Send a message
        - generic [ref=e183]: →
  - generic [ref=e184]: ✦
  - generic [ref=e186]:
    - generic [ref=e187]:
      - generic [ref=e188]:
        - text: "[ 02 /"
        - generic [ref=e189]: Framework
        - text: "]"
      - heading "A look under the hood." [level=2] [ref=e190]:
        - text: A look
        - emphasis [ref=e191]: under the hood.
      - paragraph [ref=e192]: A sample of the structure I use when building automation frameworks. The real code in client projects is richer with domain logic — this is a sanitized demo version.
    - generic [ref=e193]:
      - button "Selenium Java" [ref=e194] [cursor=pointer]:
        - img [ref=e196]
        - text: Selenium Java
      - button "REST API" [ref=e199] [cursor=pointer]:
        - img [ref=e201]
        - text: REST API
      - button "Playwright TS" [ref=e203] [cursor=pointer]:
        - img [ref=e205]
        - text: Playwright TS
    - generic [ref=e208]:
      - generic [ref=e209]:
        - generic [ref=e213]: qavant-selenium — IntelliJ IDEA
        - link "GitHub ↗" [ref=e214] [cursor=pointer]:
          - /url: https://github.com/peterolah-qa/qavant-selenium
        - group "View mode" [ref=e215]:
          - button "Code" [ref=e216] [cursor=pointer]:
            - img [ref=e217]
            - generic [ref=e220]: Code
          - button "Architecture" [ref=e221] [cursor=pointer]:
            - img [ref=e222]
            - generic [ref=e227]: Architecture
      - generic [ref=e228]:
        - complementary "Project file tree" [ref=e229]:
          - generic [ref=e231] [cursor=pointer]:
            - img [ref=e232]
            - generic [ref=e235]: DriverFactory.java
          - generic [ref=e236]:
            - text: ·
            - generic [ref=e237] [cursor=pointer]:
              - img [ref=e238]
              - generic [ref=e241]: BasePage.java
            - generic [ref=e242] [cursor=pointer]:
              - img [ref=e243]
              - generic [ref=e246]: HomePage.java
          - generic [ref=e247]:
            - text: ·
            - generic [ref=e248] [cursor=pointer]:
              - img [ref=e249]
              - generic [ref=e252]: SmokeTests.java
            - generic [ref=e253] [cursor=pointer]:
              - img [ref=e254]
              - generic [ref=e257]: CertBadgeTests.java
        - generic [ref=e258]:
          - generic [ref=e262]: BasePage.java
          - generic [ref=e264]:
            - generic [ref=e268]: /**
            - generic [ref=e270]: "* Explicit waits only — no Thread.sleep() anywhere in this codebase."
            - generic [ref=e272]: "* Every action waits for exactly the condition it needs."
            - generic [ref=e274]: "*/"
            - generic [ref=e276]: "public abstract class BasePage {"
            - generic [ref=e280]: protected final WebDriver driver;
            - generic [ref=e282]: protected final WebDriverWait wait;
            - generic [ref=e286]: "protected BasePage(WebDriver driver) {"
            - generic [ref=e288]: this.driver = driver;
            - generic [ref=e290]: this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            - generic [ref=e292]: "}"
            - generic [ref=e296]: "protected WebElement visible(By locator) {"
            - generic [ref=e298]: return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
            - generic [ref=e300]: "}"
            - generic [ref=e304]: "protected WebElement present(By locator) {"
            - generic [ref=e306]: return wait.until(ExpectedConditions.presenceOfElementLocated(locator));
            - generic [ref=e308]: "}"
            - generic [ref=e312]: "protected WebElement clickable(By locator) {"
            - generic [ref=e314]: return wait.until(ExpectedConditions.elementToBeClickable(locator));
            - generic [ref=e316]: "}"
            - generic [ref=e320]: /**
            - generic [ref=e322]: "* Scrolls an element into the viewport the way a user would."
            - generic [ref=e324]: "* The site reveals below-the-fold content via IntersectionObserver"
            - generic [ref=e326]: "* (elements start at opacity 0), so anything outside the initial"
          - generic [ref=e327]:
            - generic [ref=e328]: ● Java 17 · Selenium 4 · TestNG · Maven
            - generic [ref=e329]: 31 lines · UTF-8 · LF
    - generic [ref=e330]:
      - generic [ref=e331]:
        - img [ref=e333]
        - heading "Page Object Model" [level=4] [ref=e338]
        - paragraph [ref=e339]: Each application page is its own class. Tests never look up elements directly — that's the page object's job.
      - generic [ref=e340]:
        - img [ref=e342]
        - heading "Explicit Waits Only" [level=4] [ref=e344]
        - paragraph [ref=e345]: "No Thread.sleep(). Every action waits exactly for what it needs. Result: tests run faster and don't fail randomly."
      - generic [ref=e346]:
        - img [ref=e348]
        - heading "CI-First Architecture" [level=4] [ref=e351]
        - paragraph [ref=e352]: The framework is designed for Jenkins/GitLab CI first, not local development. Allure reports, parallel runs, retry logic.
    - generic [ref=e353]:
      - generic [ref=e354]: Java 17
      - generic [ref=e355]: Selenium 4.x
      - generic [ref=e356]: TestNG
      - generic [ref=e357]: Maven
      - generic [ref=e358]: Page Factory
      - generic [ref=e359]: Allure
      - generic [ref=e360]: WebDriverManager
      - generic [ref=e361]: Log4j2
      - generic [ref=e362]: Jenkins / GitLab CI
  - paragraph [ref=e364]:
    - generic [ref=e365]: 99% of test frameworks fail
    - generic [ref=e366]: not because the code is bad.
    - emphasis [ref=e367]: They fail because nobody understands them.
  - generic [ref=e368]: ✦
  - generic [ref=e369]:
    - generic [ref=e370]:
      - generic [ref=e371]:
        - generic [ref=e372]:
          - text: "[ 03 /"
          - generic [ref=e373]: Background
          - text: "]"
        - heading "Three years in banks taught me one thing." [level=2] [ref=e374]:
          - text: Three years in banks
          - emphasis [ref=e375]: taught me one thing.
      - generic [ref=e376]:
        - generic [ref=e377]:
          - paragraph [ref=e378]: I'm Peter Oláh. For the past three years I tested banking applications at ČSOB and VÚB — where behind every transaction there is real money belonging to real people.
          - generic [ref=e379]:
            - text: "\"For me, quality isn't a goal — it's"
            - emphasis [ref=e380]: a standard I don't compromise on.
            - text: "\""
          - paragraph [ref=e381]: ISTQB CTFL v4 certified, working as a freelancer (IČO), specialized in fintech. Qavant is my platform — where I do work I'm proud of and choose who I collaborate with.
          - paragraph [ref=e382]: Attention to detail is a professional habit for me, not suffering. In QA, it's a surprising competitive edge.
        - generic [ref=e383]:
          - generic [ref=e384]:
            - generic [ref=e385]:
              - text: "0"
              - emphasis [ref=e386]: +
            - generic [ref=e387]: Years in fintech QA
          - generic [ref=e388]:
            - generic [ref=e389]: ISTQB
            - generic [ref=e390]: ISTQB CTFL v4
          - generic [ref=e391]:
            - generic [ref=e392]: "0"
            - generic [ref=e393]: Banks · ČSOB & VÚB
          - generic [ref=e394]:
            - generic [ref=e395]: "0"
            - generic [ref=e396]: Production incidents on my watch
    - link "Peter Oláh na LinkedIn" [ref=e398] [cursor=pointer]:
      - /url: https://www.linkedin.com/in/peter-olah-8ab858137/
      - img [ref=e400]
      - generic [ref=e402]:
        - generic [ref=e403]: Let's connect
        - generic [ref=e404]: Peter Oláh
        - generic [ref=e405]: linkedin.com/in/peter-olah
  - generic [ref=e406]: ✦
  - generic [ref=e409]:
    - text: “
    - generic [ref=e411]: Manifesto
    - paragraph [ref=e412]:
      - text: For me, QA is not about automation and tools. Those change.
      - emphasis [ref=e413]: It's about responsibility to the user and respect for the team's work.
      - text: I am here to make complex things reliable.
    - generic [ref=e415]: Peter · Qavant
    - generic [ref=e416]:
      - generic [ref=e417]:
        - generic [ref=e418]: "01"
        - heading "Detail is the craft" [level=5] [ref=e419]
        - paragraph [ref=e420]: Every missed bug is someone's bad day. I take it personally.
      - generic [ref=e421]:
        - generic [ref=e422]: "02"
        - heading "No vendor lock-in" [level=5] [ref=e423]
        - paragraph [ref=e424]: Your framework, your code. If I leave, your team keeps shipping without a hiccup.
      - generic [ref=e425]:
        - generic [ref=e426]: "03"
        - heading "Predictable over fast" [level=5] [ref=e427]
        - paragraph [ref=e428]: Slower and stable beats fast and flaky. Long-term, it always pays off.
      - generic [ref=e429]:
        - generic [ref=e430]: "04"
        - heading "Honest work, honest pricing" [level=5] [ref=e431]
        - paragraph [ref=e432]: Fixed prices, clear scope, no hourly invoices with end-of-month surprises.
  - generic [ref=e433]: ✦
  - generic [ref=e435]:
    - generic [ref=e436]:
      - generic [ref=e437]:
        - text: "[ 04 /"
        - generic [ref=e438]: How we work
        - text: "]"
      - heading "No surprises. Predictable process." [level=2] [ref=e439]:
        - text: No surprises.
        - emphasis [ref=e440]: Predictable process.
      - paragraph [ref=e441]: Four clear steps from first email to handover. You know what happens when, I know what's expected of me. No black-box freelancer.
    - generic [ref=e442]:
      - generic [ref=e443]:
        - generic [ref=e444]:
          - generic [ref=e445]: "01"
          - generic [ref=e446]: / 04
        - heading "Discovery" [level=4] [ref=e447]
        - paragraph [ref=e448]: 30-minute call about your project. What's the stack, what's the pain, what's the goal. No commitment, no invoice — I want to know if we can help each other.
        - generic [ref=e449]: ⏱ 30 min · free
        - text: ↓
      - generic [ref=e450]:
        - generic [ref=e451]:
          - generic [ref=e452]: "02"
          - generic [ref=e453]: / 04
        - heading "Audit & Plan" [level=4] [ref=e454]
        - paragraph [ref=e455]: I review your code and CI. You receive a written audit with findings and an implementation plan — scope, timeline, fixed price.
        - generic [ref=e456]: ⏱ 3–5 days
        - text: ↓
      - generic [ref=e457]:
        - generic [ref=e458]:
          - generic [ref=e459]: "03"
          - generic [ref=e460]: / 04
        - heading "Build" [level=4] [ref=e461]
        - paragraph [ref=e462]: Framework build, CI integration, first tests. Weekly check-ins, Friday demos, code in the repo from day one.
        - generic [ref=e463]: ⏱ 2–6 weeks
        - text: ↓
      - generic [ref=e464]:
        - generic [ref=e465]:
          - generic [ref=e466]: "04"
          - generic [ref=e467]: / 04
        - heading "Handover" [level=4] [ref=e468]
        - paragraph [ref=e469]: Documentation, video walkthrough, team onboarding. 30 days of free support. Your framework, your code, no vendor lock-in.
        - generic [ref=e470]: ⏱ 1 week + 30 days
    - generic [ref=e472]:
      - generic [ref=e473]:
        - generic [ref=e474]: READY TO START?
        - heading "You know what I do. You know how I work." [level=3] [ref=e475]
        - paragraph [ref=e476]: The last step is simple — drop me a few lines about your project.
      - link "Let's talk →" [ref=e477]:
        - /url: "#contact"
        - generic [ref=e478]: Let's talk
        - generic [ref=e479]: →
  - generic [ref=e483]:
    - generic [ref=e484]:
      - generic [ref=e485]:
        - text: "[ 05 /"
        - generic [ref=e486]: Contact
        - text: "]"
      - heading "Stick around. It gets interesting." [level=2] [ref=e487]:
        - text: Stick around.
        - emphasis [ref=e488]: It gets interesting.
      - paragraph [ref=e489]: Drop me a few lines about your project. I usually reply within 24 hours, often sooner.
      - generic [ref=e490]:
        - generic [ref=e491]:
          - generic [ref=e492]: Email
          - generic [ref=e493]: peterolah@qavant.dev
        - generic [ref=e494]:
          - generic [ref=e495]: Location
          - generic [ref=e496]: Bratislava · Remote
        - generic [ref=e497]:
          - generic [ref=e498]: Languages
          - generic [ref=e499]: SK · EN · DE
        - generic [ref=e500]:
          - generic [ref=e501]: Status
          - generic [ref=e502]:
            - text: ●
            - generic [ref=e503]: Accepting projects
    - generic [ref=e504]:
      - paragraph [ref=e505]:
        - generic [ref=e506]:
          - text: "Nevypĺňaj:"
          - textbox "Nevypĺňaj:" [ref=e507]
      - generic [ref=e508]:
        - generic [ref=e509]:
          - generic [ref=e510]: Name
          - textbox "Name" [ref=e511]
        - generic [ref=e512]:
          - generic [ref=e513]: Email
          - textbox "Email" [ref=e514]
      - generic [ref=e515]:
        - generic [ref=e516]: Company (optional)
        - textbox "Company (optional)" [ref=e517]
      - generic [ref=e518]:
        - generic [ref=e519]: I'm interested in
        - combobox "I'm interested in" [ref=e520]:
          - option "Test automation framework" [selected]
          - option "API / regression testing"
          - option "QA audit / consulting"
          - option "Request framework sample (GitHub access)"
          - option "Something else — I'll explain"
      - generic [ref=e521]:
        - generic [ref=e522]: Message
        - textbox "Message" [ref=e523]
      - generic [ref=e524]:
        - generic [ref=e525]: No spam. No bots. Just me.
        - button "Send message →" [ref=e526]:
          - generic [ref=e527]: Send message
          - generic [ref=e528]: →
  - contentinfo [ref=e529]:
    - generic [ref=e530]:
      - generic [ref=e531]:
        - generic [ref=e532]:
          - text: © 2026 Qavant —
          - emphasis [ref=e533]: crafted in Bratislava
        - generic [ref=e534]:
          - link "peterolah@qavant.dev" [ref=e535] [cursor=pointer]:
            - /url: mailto:peterolah@qavant.dev
          - generic [ref=e536]: ·
          - link "LinkedIn" [ref=e537] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/peter-olah-8ab858137/
          - generic [ref=e538]: ·
          - link "GitHub" [ref=e539] [cursor=pointer]:
            - /url: https://github.com/peterolah-qa
      - generic [ref=e540]:
        - link "Privacy Policy" [ref=e541] [cursor=pointer]:
          - /url: /privacy
        - link "Impressum" [ref=e542] [cursor=pointer]:
          - /url: /impressum
        - generic [ref=e543]: ●This site uses no cookies
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