# 12.2 Primer design 基本法

- 返回总讲义：[[CHEM10712_slides_knowledge_notes_zh|CHEM10712 slides 知识点整理与讲解]]
- 知识点索引：[[00 CHEM10712 知识点索引|CHEM10712 知识点索引]]
- 上级章节：[[12 PCR、primer design 与 DNA manipulation|12. PCR、primer design 与 DNA manipulation]]
- 导航：上一节：[[12-01 PCR 原理|12.1 PCR 原理]]；下一节：[[12-03 DNA manipulation 概念|12.3 DNA manipulation 概念]]

## 详细内容

课件给出简化 Tm 公式：

```text
Tm = 2 * (A + T) + 4 * (G + C)
```

primer 设计原则：

- forward primer 与目标序列 5' 端相同方向，写 5'->3'。
- reverse primer 是目标 3' 端互补链的 reverse complement，也写 5'->3'。
- 两个 primers 的 Tm 应接近。
- primer 需要能特异性夹住 target region。

课件例子：

```text
pF: ATGGCCATGATTACGGATTCA
pR: TTATTTTTGACACCAGACCAAC
Tm approx. 60 C
```

常见错误：

- reverse primer 直接抄 template 末端而没有 reverse complement。
- 忘记所有 primers 都要按 5'->3' 写。
- 只看序列长度不看 GC content。

