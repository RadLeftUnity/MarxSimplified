const fs = require('fs');

let content = fs.readFileSync('src/data/faq/faqData.ts', 'utf8');

// 1. why-do-marxists-oppose-nato
content = content.replace(
  /("id":\s*"why-do-marxists-oppose-nato"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"x-the-place-of-imperialism-in-history"/,
  '$1"vii-imperialism-as-a-special-stage-of-capitalism"'
);
content = content.replace(
  /("id":\s*"why-do-marxists-oppose-nato"[\s\S]*?"chapterTitle":\s*)"X\. The Place of Imperialism in History"/,
  '$1"VII. Imperialism as a Special Stage of Capitalism"'
);

// 2. what-is-a-color-revolution-regime-change
content = content.replace(
  /("id":\s*"what-is-a-color-revolution-regime-change"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"x-the-place-of-imperialism-in-history"/,
  '$1"vii-imperialism-as-a-special-stage-of-capitalism"'
);
content = content.replace(
  /("id":\s*"what-is-a-color-revolution-regime-change"[\s\S]*?"chapterTitle":\s*)"X\. The Place of Imperialism in History"/,
  '$1"VII. Imperialism as a Special Stage of Capitalism"'
);

// 3. venezuela-guarimbas-and-juan-guaido-coup
content = content.replace(
  /("id":\s*"venezuela-guarimbas-and-juan-guaido-coup"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"x-the-place-of-imperialism-in-history"/,
  '$1"vii-imperialism-as-a-special-stage-of-capitalism"'
);
content = content.replace(
  /("id":\s*"venezuela-guarimbas-and-juan-guaido-coup"[\s\S]*?"chapterTitle":\s*)"X\. The Place of Imperialism in History"/,
  '$1"VII. Imperialism as a Special Stage of Capitalism"'
);

// 4. cuba-july-11-2021-protests-color-revolution
content = content.replace(
  /("id":\s*"cuba-july-11-2021-protests-color-revolution"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"the-experience-of-1848-1851"/,
  '$1"class-society-and-the-state"'
);
content = content.replace(
  /("id":\s*"cuba-july-11-2021-protests-color-revolution"[\s\S]*?"chapterTitle":\s*)"Chapter II\. The Experience of 1848-1851"/,
  '$1"1. Class Society and the State"'
);

// 5. difference-between-socialism-and-communism
content = content.replace(
  /("id":\s*"difference-between-socialism-and-communism"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"chapter1"([\s\S]*?"annotationId":\s*)"gotha-prog-ch1-ann-3"/,
  '$1"part-i-critique-of-section-i-labor-distribution-phases-of-communist-society"$2"gotha-programme-chapter2-ext-2"'
);

// 6. china-tiananmen-square-1989
content = content.replace(
  /("id":\s*"china-tiananmen-square-1989"[\s\S]*?"relatedAnnotations":\s*\[\s*\{[\s\S]*?"chapterId":\s*)"two-different-types-of-contradictions"([\s\S]*?"annotationId":\s*)"on-the-correct-handling-of-contradictions-among-the-people-chapter1-ann-1"/,
  '$1"on-the-correct-handling-of-contradictions-among-the-people"$2"contradictions-among-people-1"'
);

// 7. marxism-and-identity-politics
content = content.replace(
  /("id":\s*"marxism-and-identity-politics"[\s\S]*?"bookId":\s*"social-basis-of-the-woman-question"[\s\S]*?"chapterId":\s*)"the-struggle-for-economic-independence"([\s\S]*?"annotationId":\s*)"kollontai-social-basis-ch1-ann-1"/,
  '$1"introduction"$2"kollontai-social-basis-ch1-ann-1"'
);
content = content.replace(
  /("id":\s*"marxism-and-identity-politics"[\s\S]*?"bookId":\s*"capitalism-and-female-labour"[\s\S]*?"chapterId":\s*"capitalism-and-female-labour"[\s\S]*?"annotationId":\s*)"capitalism-female-labour-ch1-ann-1"/,
  '$1"capitalism-and-female-labour-ann-1"'
);

// 8. philanthropic-donating-billionaires
content = content.replace(
  /("id":\s*"philanthropic-donating-billionaires"[\s\S]*?"bookId":\s*"das-kapital-vol-1"[\s\S]*?"chapterId":\s*)"the-working-day"/,
  '$1"constant-capital-and-variable-capital"'
);
content = content.replace(
  /("id":\s*"philanthropic-donating-billionaires"[\s\S]*?"chapterTitle":\s*)"Chapter X: The Working-Day"/,
  '$1"Chapter VIII: Constant Capital and Variable Capital"'
);
content = content.replace(
  /("id":\s*"philanthropic-donating-billionaires"[\s\S]*?"bookId":\s*"wage-labour"[\s\S]*?"chapterId":\s*)"the-general-law-that-determines-the-rise-and-fall-of-wages-and-profits"([\s\S]*?"annotationId":\s*)"wage-labour-chapter7-ext-1"/,
  '$1"rise-and-fall-of-wages"$2"rise-and-fall-of-wages-ann-2"'
);

// 9. ussr-1932-1933-famine-collectivization
content = content.replace(
  /("id":\s*"ussr-1932-1933-famine-collectivization"[\s\S]*?"bookId":\s*"the-tax-in-kind"[\s\S]*?"chapterId":\s*)"the-tax-in-kind"([\s\S]*?"annotationId":\s*)"the-tax-in-kind-tax-in-kind-ann-1"/,
  '$1"tax-in-kind-freedom-to-trade-and-concessions"$2"the-tax-in-kind-ch4-ann-1"'
);
content = content.replace(
  /("id":\s*"ussr-1932-1933-famine-collectivization"[\s\S]*?"bookId":\s*"foundations-of-leninism"[\s\S]*?"chapterId":\s*"the-peasant-question"[\s\S]*?"annotationId":\s*)"foundations-of-leninism-peasant-question-ann-1"/,
  '$1"foundations-leninism-ch6-ann-1"'
);

// 10. ethiopia-1983-1985-famine-derg
content = content.replace(
  /("id":\s*"ethiopia-1983-1985-famine-derg"[\s\S]*?"bookId":\s*"the-courage-to-criticize-imperialism"[\s\S]*?"chapterId":\s*"the-courage-to-criticize-imperialism"[\s\S]*?"annotationId":\s*)"the-courage-to-criticize-imperialism-ch1-ann-1"/,
  '$1"sankara-courage-5"'
);

// 11. historical-materialism-stages-of-development
content = content.replace(
  /("id":\s*"historical-materialism-stages-of-development"[\s\S]*?"bookId":\s*"principles-of-communism"[\s\S]*?"chapterId":\s*)"15-what-will-be-the-course-of-this-revolution"([\s\S]*?"annotationId":\s*)"principles-of-communism-ch15-ann-1"/,
  '$1"15-was-not-the-abolition-of-private-property-possible-at-an-earlier-time"$2"principles-of-communism-chapter15-ann-1"'
);
content = content.replace(
  /("id":\s*"historical-materialism-stages-of-development"[\s\S]*?"chapterTitle":\s*)"15\. What will be the course of this revolution\?"/,
  '$1"15. Was not the abolition of private property possible at an earlier time?"'
);
content = content.replace(
  /("id":\s*"historical-materialism-stages-of-development"[\s\S]*?"bookId":\s*"gotha-programme"[\s\S]*?"chapterId":\s*)"chapter1"([\s\S]*?"annotationId":\s*)"gotha-prog-ch1-ann-3"/,
  '$1"part-i-critique-of-section-i-labor-distribution-phases-of-communist-society"$2"gotha-programme-chapter2-ext-2"'
);

// 12. what-is-marxism-definition
content = content.replace(
  /("id":\s*"what-is-marxism-definition"[\s\S]*?"bookId":\s*"summary-of-dialectics"[\s\S]*?"chapterId":\s*"summary-of-dialectics"[\s\S]*?"annotationId":\s*)"summary-of-dialectics-ch1-ann-1"/,
  '$1"summary-of-dialectics-ann-1"'
);

// 13. why-communists-say-real-communism-never-tried
content = content.replace(
  /("id":\s*"why-communists-say-real-communism-never-tried"[\s\S]*?"bookId":\s*"gotha-programme"[\s\S]*?"chapterId":\s*)"chapter1"([\s\S]*?"annotationId":\s*)"gotha-prog-ch1-ann-3"/,
  '$1"part-i-critique-of-section-i-labor-distribution-phases-of-communist-society"$2"gotha-programme-chapter2-birthmarks"'
);

// 14. is-marxism-eurocentric
content = content.replace(
  /("id":\s*"is-marxism-eurocentric"[\s\S]*?"bookId":\s*"the-courage-to-criticize-imperialism"[\s\S]*?"chapterId":\s*"the-courage-to-criticize-imperialism"[\s\S]*?"annotationId":\s*)"the-courage-to-criticize-imperialism-ch1-ann-1"/,
  '$1"sankara-courage-3"'
);

// 15. did-ussr-persecute-religion
content = content.replace(
  /("id":\s*"did-ussr-persecute-religion"[\s\S]*?"bookId":\s*)"the-tax-in-kind"([\s\S]*?"chapterId":\s*)"the-tax-in-kind"([\s\S]*?"annotationId":\s*)"the-tax-in-kind-tax-in-kind-ann-1"([\s\S]*?"bookTitle":\s*)"The Tax in Kind"([\s\S]*?"chapterTitle":\s*)"The Tax in Kind"([\s\S]*?"author":\s*)"V\.I\. Lenin"([\s\S]*?"quote":\s*)"[^"]*"([\s\S]*?"summary":\s*)"[^"]*"/,
  '$1"principles-of-communism"$2"23-what-will-be-its-attitude-to-existing-religions"$3"principles-of-communism-chapter23-ann-1"$4"The Principles of Communism"$5"23. What will be its attitude to existing religions?"$6"Friedrich Engels"$7"All religions so far have been the expression of historical stages of development of individual peoples or groups of peoples."$8"Engels analyzes that communist social planning dissolves the material conditions of vulnerability that foster religious alienation."'
);

// 16. money-wages-markets-under-socialism
content = content.replace(
  /("id":\s*"money-wages-markets-under-socialism"[\s\S]*?"bookId":\s*"gotha-programme"[\s\S]*?"chapterId":\s*)"chapter1"([\s\S]*?"annotationId":\s*)"gotha-prog-ch1-ann-3"/,
  '$1"part-i-critique-of-section-i-labor-distribution-phases-of-communist-society"$2"gotha-programme-chapter2-ext-2"'
);

fs.writeFileSync('src/data/faq/faqData.ts', content, 'utf8');
console.log('Finished applying FAQ annotation reference fixes.');
