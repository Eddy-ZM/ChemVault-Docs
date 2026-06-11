---
title: '14.2 C1 feedstocks 与 engineered E. coli'
---
- 返回总讲义：[CHEM10712 slides 知识点整理与讲解](/uom-chemistry/chem10712/chem10712_slides_knowledge_notes_zh/)
- 知识点索引：[CHEM10712 知识点索引](/uom-chemistry/chem10712_knowledge_points/00-chem10712-知识点索引/)
- 上级章节：[14. Microbial metabolic engineering 与 case studies](/uom-chemistry/chem10712_knowledge_points/14-microbial-metabolic-engineering-与-case-studies/)
- 导航：上一节：[14.1 Metabolic engineering 策略](/uom-chemistry/chem10712_knowledge_points/14-01-metabolic-engineering-策略/)；下一节：[14.3 Nanobodies](/uom-chemistry/chem10712_knowledge_points/14-03-nanobodies/)

## 详细内容

C1 compounds 便宜且来源广，可来自 fossil fuel、industrial by-products、biomass。Synthetic biology、genome engineering、laboratory evolution 可将 C1-based cell factories 用于 high-value products。

课件例子：

- engineered E. coli 通过 heterologous expression of RuBisCO, Prk, CA, Fdh 构建 synthetic CBB cycle。
- formate 提供 reducing power。
- deletion of pfk and zwf 使 growth 依赖 RuBisCO carboxylation。
- 结合 ALE 逐步减少外加 xylose，实现 CO2-based growth。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

C1 feedstocks 如 CO2、formate、methanol 的吸引力在于便宜、来源广，并可能降低对食物级碳源的依赖。但多数 production hosts 不天然高效利用 C1，因此需要 synthetic pathways、heterologous enzymes 和 evolution。

engineered E. coli 的例子把 CBB cycle 相关 enzymes 引入，并删除 pfk/zwf 让生长依赖 RuBisCO carboxylation。ALE 通过逐步选择能在新代谢约束下生长的 mutants，帮助系统从“理论可行”变成“实际能长”。

## 原文小点逐条解释

- **原文小点：** engineered E. coli 通过 heterologous expression of RuBisCO, Prk, CA, Fdh 构建 synthetic CBB cycle。
  - **讲解：** 这个小点属于 C1 feedstock engineering；要联系 CO2/formate utilization、synthetic CBB cycle、heterologous enzymes 和 ALE adaptation。
- **原文小点：** formate 提供 reducing power。
  - **讲解：** 这个小点属于 C1 feedstock engineering；要联系 CO2/formate utilization、synthetic CBB cycle、heterologous enzymes 和 ALE adaptation。
- **原文小点：** deletion of pfk and zwf 使 growth 依赖 RuBisCO carboxylation。
  - **讲解：** 这个小点属于 C1 feedstock engineering；要联系 CO2/formate utilization、synthetic CBB cycle、heterologous enzymes 和 ALE adaptation。
- **原文小点：** 结合 ALE 逐步减少外加 xylose，实现 CO2-based growth。
  - **讲解：** 这个小点属于 C1 feedstock engineering；要联系 CO2/formate utilization、synthetic CBB cycle、heterologous enzymes 和 ALE adaptation。

## 做题和复习时怎么用

答 C1 utilization 时写 cheap/abundant feedstock + pathway engineering + cofactor balance + ALE adaptation。

## 常见误区

- 把工程化写成单一步骤，忽略 selection/screening、flux 和 host fitness。
- 混淆 ALE 的 whole-cell selection 与 directed evolution 的 protein-function screening。

## 关联知识点

- [metabolism](/uom-chemistry/chem10712_knowledge_points/09-01-metabolism-的核心理解/)
- [ALE](/uom-chemistry/chem10712_knowledge_points/15-02-adaptive-laboratory-evolution-ale/)

<!-- END_DETAILED_EXPLANATION -->
