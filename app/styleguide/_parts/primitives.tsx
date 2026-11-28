import { sg } from "@/content/styleguide";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SpecStrip, SpecTable } from "@/components/ui/spec";
import { Bar, Rule } from "@/components/ui/rule";
import { FileTag, MetaBlock, RotatedLabel, Tag } from "@/components/ui/labels";
import { Bento, StatTile, Tile } from "@/components/ui/tile";
import { ImageFrame } from "@/components/ui/image-frame";
import { Wordmark } from "@/components/ui/wordmark";
import { CornerMarks } from "@/components/ui/corner-marks";
import { site } from "@/content/site";

export function Primitives() {
  return (
    <>
      <Section theme="paper-2" aria-labelledby="sg-header">
        <SectionHeader id="sg-header" layout="split" {...sg.header} />
        <SectionHeader label="05 — STACKED" meta="SECTION HEADER" title={sg.header.title} lead={sg.header.lead} />
        <div className="grid-vx gap-y-12">
          <div className="col-span-4 flex flex-col gap-8 md:col-span-4 lg:col-span-6">
            <SpecStrip items={sg.strip} />
            <SpecTable rows={sg.table} caption="SPEC TABLE" />
          </div>
          <div className="col-span-4 flex flex-col gap-8 md:col-span-4 lg:col-span-5 lg:col-start-8">
            <div className="flex flex-wrap items-center gap-4">
              <FileTag file="01" />
              <FileTag file="02" />
              <Tag tone="signal">SAMPLE</Tag>
              <Tag>DRAFT</Tag>
              <Tag tone="solid">RECOMMENDED</Tag>
            </div>
            <MetaBlock title={site.location.city} line={site.location.coords} />
            <div className="flex items-end justify-between">
              <Wordmark className="text-h2" />
              <Wordmark monogram className="text-h3" />
              <RotatedLabel>VORTEXONE · FILE 01 + 02</RotatedLabel>
            </div>
            <Rule />
            <Bar />
            <Bar size="lg" tone="signal" />
            <div className="relative m-4 h-24 border border-border">
              <CornerMarks />
            </div>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="sg-bento">
        <SectionHeader id="sg-bento" label="06 — BENTO" meta="TILE · STATTILE" title="Bento tiles and stats" />
        <Bento>
          <StatTile stat={sg.stats[0]} className="col-span-4 lg:col-span-5 lg:row-span-2" />
          <StatTile stat={sg.stats[1]} theme="ink" className="col-span-4 lg:col-span-4" />
          <StatTile stat={sg.stats[2]} theme="signal" className="col-span-4 md:col-span-8 lg:col-span-3" />
          <Tile marks className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="label-mono">TILE WITH CORNER MARKS</p>
          </Tile>
        </Bento>
      </Section>

      <Section theme="paper-2" aria-labelledby="sg-images">
        <SectionHeader id="sg-images" label="07 — IMAGES" meta="PLACEHOLDER SLOTS" title="Image frames" lead="Real images replace the hatch at the same aspect ratio once uploaded." />
        <div className="grid-vx gap-y-12">
          <ImageFrame slot="file01-object" block="left" className="col-span-2 md:col-span-3 lg:col-span-3" />
          <ImageFrame slot="file02-object" block="right" className="col-span-2 md:col-span-3 lg:col-span-3" />
          <ImageFrame slot="calculator-object" className="col-span-4 md:col-span-2 lg:col-span-2" />
          <ImageFrame slot="work-01" screenshot className="col-span-4 md:col-span-8 lg:col-span-4" />
        </div>
      </Section>
    </>
  );
}
