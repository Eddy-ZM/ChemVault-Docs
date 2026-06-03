---
title: '13.5 CRISPR-Cas9'
---

# 13.5 CRISPR-Cas9

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[13 Recombinant proteins 与 genome editing|13. Recombinant proteins 与 genome editing]]
- 导航：上一节：[[13-04 Expression hosts 比较|13.4 Expression hosts 比较]]；下一节：[[14-01 Metabolic engineering 策略|14.1 Metabolic engineering 策略]]

## 详细内容

CRISPR-Cas9 是 molecular scissors：

- guide RNA 识别 target DNA sequence。
- Cas9 protein 在特定位点切割 DNA。
- 后续 repair 可导致 knockout 或 precise editing。

应用：

- correct genetic defects。
- study gene function。
- disease models。
- crop/food/fermentation process engineering。
- potential therapeutics for cancer, HIV, genetic disorders。

伦理问题：

- germline editing 可遗传。
- eugenics 风险。
- misuse。
- access inequality。

<!-- BEGIN_DETAILED_EXPLANATION -->

## 深入讲解

CRISPR-Cas9 来自细菌免疫系统，被工程化为 programmable DNA cutting tool。guide RNA 提供序列特异性，Cas9 提供 nuclease activity。切口之后，细胞的 DNA repair pathways 决定结果：NHEJ 常产生 indels/knockout，HDR 可在模板存在时引入 precise edit。

伦理重点集中在 germline editing，因为改变可遗传并影响未来个体；somatic therapeutic editing 风险也存在，但通常不遗传。

## 原文小点逐条解释

- **原文小点：** guide RNA 识别 target DNA sequence。
  - **讲解：** guide RNA 通过与 target DNA 互补配对提供定位信息；换 guide sequence 就能重新编程 Cas9 的目标位点。
- **原文小点：** Cas9 protein 在特定位点切割 DNA。
  - **讲解：** Cas9 是 nuclease，负责在 guide RNA 指定的位置切断 DNA；没有 Cas9，guide RNA 只提供识别不产生切口。
- **原文小点：** 后续 repair 可导致 knockout 或 precise editing。
  - **讲解：** DNA double-strand break 后由细胞修复系统处理；NHEJ 常产生 indels/knockout，HDR 可借模板产生 precise edit。
- **原文小点：** correct genetic defects。
  - **讲解：** 这属于医学应用：通过改变致病基因或疾病相关细胞功能，尝试治疗或研究遗传病、癌症或感染。
- **原文小点：** study gene function。
  - **讲解：** 这属于研究应用：敲除或改变基因后观察 phenotype，可推断 gene function 或建立 disease model。
- **原文小点：** disease models。
  - **讲解：** 这属于研究应用：敲除或改变基因后观察 phenotype，可推断 gene function 或建立 disease model。
- **原文小点：** crop/food/fermentation process engineering。
  - **讲解：** 这属于农业/工业应用：改变作物性状或微生物代谢，提高产量、耐受性或发酵性能。
- **原文小点：** potential therapeutics for cancer, HIV, genetic disorders。
  - **讲解：** 这属于医学应用：通过改变致病基因或疾病相关细胞功能，尝试治疗或研究遗传病、癌症或感染。
- **原文小点：** germline editing 可遗传。
  - **讲解：** germline editing 的改变可遗传给后代，因此伦理风险高于 somatic editing。
- **原文小点：** eugenics 风险。
  - **讲解：** 这是社会伦理风险：技术可能被用于非治疗性增强、滥用，或只让部分人群受益而扩大不平等。
- **原文小点：** misuse。
  - **讲解：** 这是社会伦理风险：技术可能被用于非治疗性增强、滥用，或只让部分人群受益而扩大不平等。
- **原文小点：** access inequality。
  - **讲解：** 这是社会伦理风险：技术可能被用于非治疗性增强、滥用，或只让部分人群受益而扩大不平等。

## 做题和复习时怎么用

回答 CRISPR 原理写 gRNA targets sequence, Cas9 cuts DNA, repair creates edit。应用和伦理分开写，避免只写“剪刀”。

## 常见误区

- 只列应用或工具名称，不说明 vector、host、selection marker、expression element 或 editing component 的具体功能。
- 把 recombinant protein expression 和 genome editing 混为一谈；前者主要表达目标产物，后者改变 genome sequence。

## 关联知识点

- [[12-03 DNA manipulation 概念|DNA manipulation]]
- [[14-01 Metabolic engineering 策略|metabolic engineering]]

<!-- END_DETAILED_EXPLANATION -->
