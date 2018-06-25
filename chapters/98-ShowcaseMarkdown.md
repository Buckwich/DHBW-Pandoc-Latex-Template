# (Markdown Examples)

This chapter shows the use of Markdown to generate a latex document

## References

Here are some references. [@baumgartner:2002, pp. 12; @dreyfus:1980 pp. 1-3]

This can also be in text @baumgartner:2002.

## Footnotes

It is possible to use simple inline footnotes^[Explains terms most likely known]. This can also be split up[^1].

[^1]: Later explanation

## Figures

Here is a simple figure:

![Random image (100%)\label{fig:rnd}](images/logo.png)

In \autoref{fig:rnd} you can see something.

Its also possible to change the size (\autoref{fig:rndSize}) and use footnotes(\autoref{fig:rndFootnote}) or citations (\autoref{fig:rndCitation})in the caption:

![Random image scaled (50%)\label{fig:rndSize}](images/logo.png){width=50%}

![Random image with Footnote (25%) ^[of? @baumgartner:2002]\label{fig:rndFootnote}](images/logo.png){width=25%}

![Random image with Citation (10%) [of? @baumgartner:2002] \label{fig:rndCitation}](images/logo.png){width=10%}

## Equation

For \autoref{eq:rnd} I used the Latex syntax.

\begin{equation}
t-t*{0}=\sqrt{\frac{l}{g}}\int*{0}^{\varphi}{\frac{d\psi}{\sqrt{1-k^{2}\sin^{2} {\psi}}}} = \sqrt{\frac{l}{g}} F(k,\varphi)
\label{eq:rnd}
\end{equation}

## Listings

Here is a listing

- Text can also be **bold**
- or _cursive_
- and even **_both_**

## Acronyms

The first acronym \ac{AGPL} gets exaplined in a footnote. If I use it again it will only be linked: \ac{AGPL}.

## Code

Different languages are possible. For example java in \autoref{code:javaHello} or python in \autoref{code:python}

```{#code:javaHello .java caption="Simple code"}
public class HelloWorld {
    public static void main (String[] args) {
        // Ausgabe Hello World!
        System.out.println("Hello World!");
    }
}
```

```{#code:python .python caption="Python quicksort"}
def quicksort(liste):
  if len(liste) <= 1:
    return liste
  pivotelement = liste.pop()
  links = [element for element in liste if element < pivotelement]
  rechts = [element for element in liste if element >= pivotelement]
  return quicksort(links) + [pivotelement] + quicksort(rechts)

# Quelle: http://de.wikipedia.org/wiki/Python_(Programmiersprache)
```

## Tables

Pandocs support for tables is very limited, so here I used native Latex

\begin{table}[h!]
\begin{center}
\begin{tabular}{ | m{5cm} | m{1cm}| m{1cm} | }
\hline
cell1 dummy text dummy text dummy text& cell2 & cell3 \\
\hline
cell1 dummy text dummy text dummy text & cell5 & cell6 \\
\hline
cell7 & cell8 & cell9 \\
\hline
\end{tabular}
\end{center}
\caption{Test der Funktion der Tabelle und ihrer Darstellung}
\label{tabelle1}
\end{table}

## Section

This is a section

### Subsection

This is a subsection

#### Heading

Deeper is not possible
