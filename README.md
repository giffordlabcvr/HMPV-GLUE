HMPV-GLUE
=========

<img src="md/hmpv-glue-logo.png" align="right" alt="" width="250" />

Welcome to the GitHub repository for **HMPV-GLUE**, an open resource supporting phylogenomic analysis of Human Metapneumovirus (HMPV).

**HMPV-GLUE** is a sequence-oriented resource for comparative genomic analysis of Human Metapneumovirus (HMPV), developed using the [**GLUE**](https://github.com/giffordlabcvr/gluetools) software framework.

**GLUE** is an open, integrated software toolkit designed for storing and interpreting sequence data. It supports the creation of bespoke projects, incorporating essential data items for comparative genomic analysis, such as sequences, multiple sequence alignments, genome feature annotations, and other associated data.

Projects are loaded into the GLUE "engine," forming a relational database that represents the semantic relationships between data items. This foundation supports systematic comparative analyses and the development of sequence-based resources.

* * * * *

Key Features
------------

-   **Comprehensive Database**\
    HMPV-GLUE integrates genome feature definitions, reference genome sequences, multiple sequence alignments, and standardized metadata for all HMPV sequences.

-   **GLUE Framework Integration**\
    Built on the GLUE software framework, HMPV-GLUE offers an extensible platform for efficient, standardized, and reproducible computational genomic analysis of HMPV.

-   **Phylogenetic Structure**\
    Sequence data in HMPV-GLUE is organized in a phylogenetically structured manner, allowing users to explore evolutionary relationships with ease.

-   **Rich Annotations**\
    Annotated reference sequences enable rigorous comparative genomic analysis related to conservation, adaptation, structural context, and genotype-to-phenotype associations.

-   **Automated Genotyping**\
    HMPV-GLUE uses the maximum likelihood clade assignment (MLCA) algorithm to perform automated genotyping of HMPV sequences, including subgenomic fragments.

-   **Variant Mapping**\
    Incorporates a map of amino acid substitutions, facilitating detailed genetic analysis.

* * * * *

Installation
------------

To install HMPV-GLUE, follow the instructions provided in the [**User Guide**](https://github.com/giffordlabcvr/HMPV-GLUE/wiki).

You can choose between:

-   [**Docker-based installation**](https://github.com/giffordlabcvr/HMPV-GLUE/wiki/Docker-Installation) for ease of deployment.

-   [**Native installation**](https://github.com/giffordlabcvr/HMPV-GLUE/wiki/Native-Installation) for traditional setup.

HMPV-GLUE can be installed as a prebuilt database for quick setup or constructed from scratch for more customization.

* * * * *

Usage
-----

GLUE contains an interactive command line environment focused on the development and use of GLUE projects by bioinformaticians. This provides a range of productivity-oriented features such as automatic command completion, command history, and interactive paging through tabular data.

For detailed instructions on how to use HMPV-GLUE for your comparative genomic analysis, refer to GLUE's [reference documentation](http://glue-tools.cvr.gla.ac.uk/).

* * * * *

Genotyping
----------

To classify HMPV sequences via maximum likelihood clade assignment (MLCA)-based genotyping, call the appropriate genotyping module from the GLUE console, for example:

```
Mode path: /
GLUE> project hmpv
OK
Mode path: /project/hmpv
GLUE> module hmpvMaxLikelihoodGenotyper genotype file -f path/to/sequences/HMPV.fasta
```

Please note the above command sequence is equivalent to the following:

```
Mode path: /
GLUE> project hmpv module hmpvMaxLikelihoodGenotyper genotype file -f path/to/sequences/HMPV.fasta
```

* * * * *

Data Sources
------------

HMPV-GLUE relies on the following data sources:

-   [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nuccore)

* * * * *

Contributing
------------

We welcome contributions from the community! If you're interested in contributing to HMPV-GLUE, please review our Contribution Guidelines.

* * * * *

License
-------

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

* * * * *

Contact
-------

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/HMPV-GLUE/issues).

* * * * *
