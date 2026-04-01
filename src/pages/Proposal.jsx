import { useEffect, useRef } from "react";

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Monday Media - Northshore Christian Grammar School | Video Production Proposal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root {
    --cyan: #38C3DC;
    --pink: #E8174A;
    --dark: #141414;
    --dark2: #1c1c1c;
    --dark3: #242424;
    --dark4: #2e2e2e;
    --white: #ffffff;
    --grey: #aaaaaa;
    --subtle: #666666;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Jost', 'Century Gothic', 'Futura', 'Trebuchet MS', sans-serif;
    background: var(--dark);
    color: var(--white);
    font-size: 15px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
  .hero { min-height: 100vh; background: var(--dark); display: flex; flex-direction: column; justify-content: space-between; padding: 60px 80px; position: relative; overflow: hidden; }
  .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--cyan) 0%, var(--pink) 100%); }
  .hero-logo { width: 260px; mix-blend-mode: screen; }
  .hero-center { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 80px 0 40px; }
  .hero-label { font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--cyan); margin-bottom: 24px; }
  .hero-client { font-size: 18px; font-weight: 300; color: var(--grey); margin-bottom: 12px; letter-spacing: 0.04em; }
  .hero-title { font-size: clamp(52px, 7vw, 90px); font-weight: 800; line-height: 1.0; letter-spacing: -0.03em; color: var(--white); margin-bottom: 40px; }
  .hero-title span { color: var(--cyan); }
  .hero-rule { width: 64px; height: 3px; background: var(--cyan); margin-bottom: 40px; }
  .hero-meta { display: flex; gap: 60px; }
  .hero-meta-item label { display: block; font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--cyan); margin-bottom: 4px; }
  .hero-meta-item span { font-size: 14px; font-weight: 400; color: var(--grey); }
  .hero-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
  .hero-contact { font-size: 12px; color: var(--subtle); line-height: 2; text-align: right; }
  .hero-contact a { color: var(--cyan); text-decoration: none; }
  .hero-bg-number { position: absolute; right: -20px; bottom: -60px; font-size: 400px; font-weight: 900; color: rgba(56,195,220,0.04); line-height: 1; pointer-events: none; user-select: none; }
  .section { padding: 100px 80px; position: relative; }
  .section-alt { background: var(--dark2); }
  .section-dark3 { background: var(--dark3); }
  .section-num { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--cyan); margin-bottom: 16px; display: block; }
  .section-title { font-size: clamp(36px, 4vw, 54px); font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; color: var(--white); margin-bottom: 16px; }
  .section-title span { color: var(--cyan); }
  .section-rule { width: 48px; height: 3px; background: var(--cyan); margin-bottom: 40px; }
  .section-subtitle { font-size: 17px; font-weight: 300; color: var(--grey); max-width: 640px; margin-bottom: 48px; line-height: 1.75; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
  .two-col-wide { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; }
  p { font-size: 14px; font-weight: 300; color: var(--grey); line-height: 1.8; margin-bottom: 20px; }
  p:last-child { margin-bottom: 0; }
  p strong { color: var(--white); font-weight: 600; }
  .callout { background: var(--cyan); color: var(--dark); padding: 40px 48px; border-radius: 2px; }
  .callout h3 { font-size: 22px; font-weight: 800; letter-spacing: -0.01em; margin-bottom: 12px; color: var(--dark); }
  .callout p { color: rgba(20,20,20,0.75); font-size: 13.5px; margin-bottom: 12px; }
  .callout p:last-child { margin-bottom: 0; }
  .card { background: var(--dark3); border-left: 3px solid var(--cyan); padding: 32px 36px; margin-bottom: 20px; }
  .card:last-child { margin-bottom: 0; }
  .card-title { font-size: 15px; font-weight: 700; color: var(--white); letter-spacing: 0.01em; margin-bottom: 10px; }
  .card p { font-size: 13px; color: var(--grey); margin-bottom: 0; }
  .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin: 48px 0; }
  .stat { background: var(--dark3); padding: 36px 28px; text-align: center; }
  .stat-number { font-size: 48px; font-weight: 800; color: var(--cyan); line-height: 1; letter-spacing: -0.03em; display: block; margin-bottom: 8px; }
  .stat-label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--subtle); }
  .campaign-header { display: flex; align-items: flex-start; gap: 32px; margin-bottom: 48px; padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .campaign-num { font-size: 80px; font-weight: 900; color: rgba(56,195,220,0.15); line-height: 0.9; letter-spacing: -0.04em; flex-shrink: 0; width: 120px; }
  .campaign-title-block .campaign-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--cyan); margin-bottom: 8px; display: block; }
  .campaign-title-block h2 { font-size: 32px; font-weight: 800; color: var(--white); letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 12px; }
  .campaign-title-block p { font-size: 14px; color: var(--grey); font-weight: 300; max-width: 480px; margin: 0; }
  .spec-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 40px; }
  .spec-item { background: var(--dark4); padding: 20px 24px; }
  .spec-label { font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--cyan); display: block; margin-bottom: 6px; }
  .spec-value { font-size: 13px; font-weight: 500; color: var(--white); }
  .sentiment-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
  .sentiment-card { background: var(--dark4); padding: 28px 24px; border-top: 2px solid var(--cyan); }
  .sentiment-num { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--cyan); display: block; margin-bottom: 12px; }
  .sentiment-card h4 { font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
  .sentiment-card p { font-size: 12.5px; color: var(--grey); margin: 0; line-height: 1.6; }
  .campaign-divider { height: 1px; background: rgba(255,255,255,0.05); margin: 80px 0; }
  .equipment-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin: 40px 0; }
  .equip-item { background: var(--dark3); padding: 28px 24px; }
  .equip-icon { font-size: 22px; margin-bottom: 12px; display: block; }
  .equip-title { font-size: 13px; font-weight: 700; color: var(--white); margin-bottom: 6px; }
  .equip-desc { font-size: 11.5px; color: var(--subtle); line-height: 1.5; }
  .meta-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; margin: 48px 0; position: relative; }
  .meta-flow::after { content: ''; position: absolute; top: 36px; left: 10%; right: 10%; height: 2px; background: var(--cyan); opacity: 0.3; z-index: 0; }
  .flow-step { text-align: center; position: relative; z-index: 1; padding: 0 12px; }
  .flow-badge { width: 72px; height: 72px; border-radius: 50%; background: var(--cyan); color: var(--dark); font-size: 12px; font-weight: 800; letter-spacing: 0.05em; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; text-transform: uppercase; }
  .flow-step h4 { font-size: 12px; font-weight: 700; color: var(--white); margin-bottom: 6px; }
  .flow-step p { font-size: 11px; color: var(--subtle); margin: 0; line-height: 1.5; }
  .stage4-box { background: linear-gradient(135deg, rgba(56,195,220,0.08) 0%, rgba(56,195,220,0.02) 100%); border: 1px solid rgba(56,195,220,0.2); padding: 56px 64px; position: relative; overflow: hidden; }
  .stage4-box::before { content: 'STAGE 4'; position: absolute; right: -20px; bottom: -30px; font-size: 120px; font-weight: 900; color: rgba(56,195,220,0.04); letter-spacing: -0.04em; pointer-events: none; }
  .stage4-box h3 { font-size: 28px; font-weight: 800; color: var(--white); margin-bottom: 20px; letter-spacing: -0.02em; }
  .deliverables-table { width: 100%; border-collapse: collapse; margin-top: 40px; }
  .deliverables-table thead tr { background: var(--cyan); color: var(--dark); }
  .deliverables-table thead th { padding: 14px 20px; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; text-align: left; }
  .deliverables-table tbody tr { border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.15s; }
  .deliverables-table tbody tr:nth-child(even) { background: rgba(255,255,255,0.02); }
  .deliverables-table tbody tr:hover { background: rgba(56,195,220,0.05); }
  .deliverables-table td { padding: 16px 20px; font-size: 13px; color: var(--grey); vertical-align: middle; }
  .deliverables-table td:first-child { color: var(--white); font-weight: 500; }
  .tag { display: inline-block; background: rgba(56,195,220,0.12); color: var(--cyan); font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; }
  .tag-pink { background: rgba(232,23,74,0.12); color: #ff4d7a; }
  .quote-section { padding: 100px 80px; background: var(--dark); }
  .quote-box { background: var(--dark2); padding: 0; overflow: hidden; }
  .quote-box-header { background: var(--dark4); padding: 40px 48px; display: grid; grid-template-columns: 1fr auto; align-items: start; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .quote-box-meta .meta-row { display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px; }
  .meta-row-label { font-size: 9px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--cyan); min-width: 90px; }
  .meta-row-value { font-size: 14px; color: var(--white); font-weight: 400; }
  .quote-word { font-size: 80px; font-weight: 900; color: var(--white); letter-spacing: -0.04em; line-height: 0.9; text-align: right; }
  .quote-word::after { content: ''; display: block; width: 48px; height: 3px; background: var(--cyan); margin-top: 12px; margin-left: auto; }
  .line-item { padding: 28px 48px; border-bottom: 1px solid rgba(255,255,255,0.04); display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: start; position: relative; }
  .line-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--cyan); }
  .line-item-optional::before { background: var(--pink); }
  .line-item-title { font-size: 15px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
  .line-item ul { list-style: none; padding: 0; }
  .line-item ul li { font-size: 12.5px; color: var(--grey); font-weight: 300; padding: 3px 0 3px 16px; position: relative; line-height: 1.5; }
  .line-item ul li::before { content: '-'; position: absolute; left: 0; color: var(--cyan); font-weight: 500; }
  .line-item-optional ul li::before { color: var(--pink); }
  .line-price { font-size: 22px; font-weight: 700; color: var(--white); white-space: nowrap; padding-top: 4px; font-variant-numeric: tabular-nums; }
  .line-price-tbc { font-size: 13px; color: var(--subtle); padding-top: 8px; text-align: right; }
  .quote-total-row { padding: 32px 48px; display: flex; justify-content: flex-end; align-items: center; gap: 24px; background: var(--dark3); }
  .quote-total-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--subtle); }
  .quote-total-amount { font-size: 36px; font-weight: 800; color: var(--cyan); letter-spacing: -0.02em; }
  .gst-note { font-size: 11px; color: var(--subtle); padding: 12px 48px 0; text-align: right; padding-bottom: 32px; }
  .tc-grid { display: grid; grid-template-columns: 180px 1fr; gap: 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .tc-row { display: contents; }
  .tc-row-label { padding: 20px 0 20px; font-size: 12px; font-weight: 700; color: var(--white); border-bottom: 1px solid rgba(255,255,255,0.04); padding-right: 24px; }
  .tc-row-body { padding: 20px 0; font-size: 12.5px; font-weight: 300; color: var(--grey); line-height: 1.7; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .closing { min-height: 60vh; background: var(--dark); display: flex; align-items: center; padding: 100px 80px; position: relative; overflow: hidden; }
  .closing::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--pink) 0%, var(--cyan) 100%); }
  .closing-content { max-width: 700px; }
  .closing h2 { font-size: clamp(48px, 6vw, 80px); font-weight: 900; letter-spacing: -0.03em; color: var(--white); line-height: 1.0; margin-bottom: 32px; }
  .closing h2 span { color: var(--cyan); }
  .closing p { font-size: 16px; font-weight: 300; color: var(--grey); line-height: 1.75; max-width: 520px; margin-bottom: 48px; }
  .contact-block { display: flex; gap: 48px; }
  .contact-item label { display: block; font-size: 9px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--cyan); margin-bottom: 4px; }
  .contact-item a, .contact-item span { font-size: 14px; color: var(--grey); text-decoration: none; font-weight: 400; }
  .contact-item a:hover { color: var(--cyan); }
  .closing-logo { position: absolute; right: 80px; bottom: 60px; width: 160px; opacity: 0.25; mix-blend-mode: screen; }
  .sticky-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(20,20,20,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(56,195,220,0.15); padding: 0 80px; display: flex; align-items: center; justify-content: space-between; height: 56px; transform: translateY(-100%); transition: transform 0.3s ease; }
  .sticky-nav.visible { transform: translateY(0); }
  .sticky-nav-logo { height: 20px; mix-blend-mode: screen; }
  .sticky-nav-links { display: flex; gap: 32px; list-style: none; }
  .sticky-nav-links a { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--subtle); text-decoration: none; transition: color 0.2s; }
  .sticky-nav-links a:hover { color: var(--cyan); }
  .highlight { color: var(--cyan); }
  .highlight-pink { color: #ff4d7a; }
  .mb-0 { margin-bottom: 0; }
  .mt-40 { margin-top: 40px; }
  .mt-24 { margin-top: 24px; }
  .pink-card { background: rgba(232,23,74,0.08); border-left: 3px solid var(--pink); padding: 28px 32px; }
  .pink-card h4 { font-size: 14px; font-weight: 700; color: #ff4d7a; margin-bottom: 8px; }
  .pink-card p { font-size: 13px; margin: 0; }
  .cyan-strip { background: var(--cyan); padding: 56px 80px; color: var(--dark); }
  .cyan-strip h3 { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 12px; }
  .cyan-strip p { color: rgba(20,20,20,0.7); font-size: 14px; max-width: 640px; margin: 0; }
  @media print { .sticky-nav { display: none; } }
</style>
</head>
<body>

<!-- STICKY NAV -->
<nav class="sticky-nav" id="stickyNav">
  <img class="sticky-nav-logo" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAE7B9ADASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAgJBgcDBAUCAf/EAGYQAAEDAgMDBQgJDwYKCAYDAQABAgMEBQYHEQgSIRMxQVFhCRQiN3F1gbMVGDJCUlaRlLIWFyM1NjhXYnJ0gpKhsdEzQ2OVotIkR1NUc4WTtMTTJVVndoOlwcI0RKPU5PBlw+Hx/8QAHAEBAAMBAQEBAQAAAAAAAAAAAAUGBwQCAwEI/8QAOREBAAEBBQILBQcFAAAAAAAAAAECAwQFEXEGMhITFDEzNDVRUpGxByEiQWEVFhdTVKLCgYLB0eL/2gAMAwEAAhEDEQA/AIZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbPc0ftHjf85o/oykvyIHc0ftHjf85o/oykvwAAAAAAQz7pp/i+/wBZf8KTMIZ900/xff6y/wCFAhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" alt="Monday Media">
  <ul class="sticky-nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#why">Why Now</a></li>
    <li><a href="#campaigns">Campaigns</a></li>
    <li><a href="#production">Production</a></li>
    <li><a href="#meta">Meta & Leads</a></li>
    <li><a href="#deliverables">Deliverables</a></li>
    <li><a href="#quote">Quotation</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="top">
  <img class="hero-logo" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAE7B9ADASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAgJBgcDBAUCAf/EAGYQAAEDAgMDBQgJDwYKCAYDAQABAgMEBQYHEQgSIRMxQVFhCRQiN3F1gbMVGDJCUlaRlLIWFyM1NjhXYnJ0gpKhsdEzQ2OVotIkR1NUc4WTtMTTJVVndoOlwcI0RKPU5PBlw+Hx/8QAHAEBAAMBAQEBAQAAAAAAAAAAAAUGBwQCAwEI/8QAOREBAAEBBQILBQcFAAAAAAAAAAECAwQFEXEGMhITFDEzNDVRUpGxByEiQWEVFhdTVKLCgYLB0eL/2gAMAwEAAhEDEQA/AIZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbPc0ftHjf85o/oykvyIHc0ftHjf85o/oykvwAAAAAAQz7pp/i+/wBZf8KTMIZ900/xff6y/wCFAhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" alt="Monday Media">
  <div class="hero-center">
    <span class="hero-label">Video Production Proposal</span>
    <div class="hero-client">Northshore Christian Grammar School</div>
    <h1 class="hero-title">Enrolment<br><span>Video</span><br>Campaign</h1>
    <div class="hero-rule"></div>
    <div class="hero-meta">
      <div class="hero-meta-item"><label>Prepared For</label><span>Northshore CGS</span></div>
      <div class="hero-meta-item"><label>Date</label><span>April 2026</span></div>
      <div class="hero-meta-item"><label>Project Type</label><span>Video Marketing &amp; Production</span></div>
    </div>
  </div>
  <div class="hero-bottom">
    <p style="font-size:12px;color:var(--subtle);max-width:400px;">Eight years of partnership. Nine years of growth. Here's to the next chapter.</p>
    <div class="hero-contact">
      <a href="tel:0447276379">0447 276 379</a><br>
      <a href="mailto:info@mondaymedia.com.au">info@mondaymedia.com.au</a><br>
      <a href="https://www.mondaymedia.com.au" target="_blank">www.mondaymedia.com.au</a>
    </div>
  </div>
  <div class="hero-bg-number">01</div>
</section>

<!-- ABOUT (Section 01) -->
<section class="section section-alt" id="about">
  <span class="section-num">01 - About Monday Media</span>
  <h2 class="section-title">Where Story<br>Meets <span>Strategy</span></h2>
  <div class="section-rule"></div>
  <div class="two-col-wide">
    <div>
      <p>Monday Media is a full-service creative agency based in Joondalup, WA. We specialise in video production, web design, branding, paid advertising and social content and we bring all of it together under one roof.</p>
      <p>We don't use templates. We don't aim for average. And we don't settle for anything less than a genuine reaction of <strong>"wow"</strong>. Our clients know that and they come back because of it.</p>
      <p>We are proud to be one of the very few creative agencies in Western Australia that genuinely specialises in the private school sector. With a library of <strong>over 500 school videos</strong> produced across Perth and regional WA, we understand school marketing in a way that most agencies simply don't.</p>
      <p>We understand community expectations. We understand the emotional driver behind every enrolment decision. And we know how to translate a school's mission into a cinematic narrative that feels both premium and personal.</p>
      <p>With the SCEA group of schools as one of our most trusted long-term partners, we don't arrive at Northshore as strangers. We arrive as a team that already knows your community, your values, and what great looks like for your school.</p>
    </div>
    <div>
      <div class="callout">
        <h3>Our SCEA Relationship</h3>
        <p>Monday Media has been a trusted production partner of Swan Christian Education Association for many years. Our work spans the full SCEA network from school films and student stories to teacher recruitment and the 40-year history documentary.</p>
        <p>We've been working with Northshore specifically for nearly eight years almost the entire life of the school. We know who you are. We know what you've built. And we know exactly how to show the world what's next.</p>
      </div>
      <div class="card mt-40">
        <div class="card-title">Our Team on This Project</div>
        <p><strong>Paul Dean</strong> - Founder &amp; Creative Director. Strategy, creative direction, client lead.<br>
        <strong>Jon-Michael (JM)</strong> - Lead Video Production. Award-winning filmmaker, DJI Ronin 4D.</p>
      </div>
    </div>
  </div>
  <div class="stats-row">
    <div class="stat"><span class="stat-number">500+</span><span class="stat-label">School Videos Produced</span></div>
    <div class="stat"><span class="stat-number">8</span><span class="stat-label">Years with Northshore</span></div>
    <div class="stat"><span class="stat-number">60+</span><span class="stat-label">Five Star Reviews</span></div>
  </div>
</section>

<!-- WHY NOW (Section 02) -->
<section class="section" id="why">
  <span class="section-num">02 - Why This Project, Why Now</span>
  <h2 class="section-title">The Right Campaign<br>at the <span>Right Moment</span></h2>
  <div class="section-rule"></div>
  <p class="section-subtitle">This isn't a routine refresh. There are three converging forces that make this campaign genuinely urgent and genuinely exciting.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;margin-bottom:48px;">
    <div style="background:var(--dark3);padding:40px 36px;border-top:3px solid var(--cyan);">
      <div style="font-size:36px;font-weight:900;color:rgba(56,195,220,0.2);margin-bottom:16px;letter-spacing:-0.03em;">01</div>
      <h3 style="font-size:17px;font-weight:700;color:var(--white);margin-bottom:14px;">The SCEA Rebrand</h3>
      <p style="font-size:13px;margin:0;">Swan Christian Education Association has just completed a major visual rebrand across all member schools, including Northshore. The existing main promo video carries the old logo throughout making it immediately outdated. A new flagship film isn't optional. It's overdue.</p>
    </div>
    <div style="background:var(--dark3);padding:40px 36px;border-top:3px solid var(--pink);">
      <div style="font-size:36px;font-weight:900;color:rgba(232,23,74,0.15);margin-bottom:16px;letter-spacing:-0.03em;">02</div>
      <h3 style="font-size:17px;font-weight:700;color:var(--white);margin-bottom:14px;">Incoming Competition</h3>
      <p style="font-size:13px;margin:0;">Two new schools are opening nearby within the next two to three years. Northshore needs to build significant waiting lists now across Kindy, Year 7, and Year 11/12 before the competitive landscape shifts. The time to act is before the competition arrives, not after.</p>
    </div>
    <div style="background:var(--dark3);padding:40px 36px;border-top:3px solid var(--cyan);">
      <div style="font-size:36px;font-weight:900;color:rgba(56,195,220,0.2);margin-bottom:16px;letter-spacing:-0.03em;">03</div>
      <h3 style="font-size:17px;font-weight:700;color:var(--white);margin-bottom:14px;">New Kindy Stream &amp; Growth</h3>
      <p style="font-size:13px;margin:0;">Northshore is launching a new 4-day kindy stream alongside the existing 3 and 5-day options. This is a genuine new product that needs awareness. Combined with the broader enrolment growth ambitions, it demands dedicated, targeted creative not a general awareness play.</p>
    </div>
  </div>
  <div class="pink-card">
    <h4>The Overarching Goal</h4>
    <p>Drive sufficient waiting list depth across all key intake points so that Northshore can absorb any increased churn from new competitor schools opening and any softening in family budgets from a potential economic downturn without it materially affecting growth.</p>
  </div>
</section>

<!-- CAMPAIGNS (Section 03) - unchanged from original except em dashes -->
<section class="section section-alt" id="campaigns">
  <span class="section-num">03 - The Campaigns</span>
  <h2 class="section-title">Four Campaigns.<br><span>One Unified Vision.</span></h2>
  <div class="section-rule"></div>
  <p class="section-subtitle">Each campaign targets a distinct audience at a distinct point in their decision-making journey. The creative, tone, format and emotional driver are purpose-built for each.</p>

  <div class="campaign-header"><div class="campaign-num">A</div><div class="campaign-title-block"><span class="campaign-tag">Campaign A - Website &amp; Brand</span><h2>Main Promotional Video</h2><p>The flagship film. Launched to coincide with the new SCEA brand rollout, this lives on the Northshore website and represents the school's definitive screen presence.</p></div></div>
  <div class="two-col"><div>
    <div class="spec-grid" style="grid-template-columns:repeat(2,1fr);">
      <div class="spec-item"><span class="spec-label">Length</span><span class="spec-value">2 minutes</span></div>
      <div class="spec-item"><span class="spec-label">Format</span><span class="spec-value">Landscape 16:9</span></div>
      <div class="spec-item"><span class="spec-label">Voiceover</span><span class="spec-value">None - talent led</span></div>
      <div class="spec-item"><span class="spec-label">Footage</span><span class="spec-value">80% new / 20% existing (2024+)</span></div>
    </div>
    <p>This film needs to answer every big question a prospective family might have in under two minutes: who is Northshore, what do they stand for, what does the campus feel like, and what can my child become here? It answers all of this without ever feeling like a checklist.</p>
    <p>Three teachers speak on camera <strong>Principal Stuart Chisholm</strong> plus two additional staff to be confirmed at pre-production. No children speaking to camera. No professional voiceover. Authentic, confident, cinematic.</p>
  </div><div>
    <div class="callout"><h3>What This Film Must Do</h3><p>Communicate Northshore's identity, ethos and CHARIS framework. Show the campus including the Stage 4 development in progress. Capture the warmth of the community. Showcase the breadth of programs. And do all of this while reflecting the new SCEA brand identity.</p><p>This film is not a paid ad. It lives lower in the funnel for families who are already researching and need to feel something before they make the call.</p></div>
  </div></div>
  <div class="campaign-divider"></div>

  <div class="campaign-header"><div class="campaign-num">B</div><div class="campaign-title-block"><span class="campaign-tag">Campaign B - Early Learning</span><h2>Kindy Enrolment Campaign</h2><p>Three short-form vertical ads targeting parents of kindy-aged children across Meta. Launching the new 4-day stream while protecting and growing the waiting list ahead of incoming competition.</p></div></div>
  <div class="spec-grid"><div class="spec-item"><span class="spec-label">Videos</span><span class="spec-value">3 x Short-Form Ads</span></div><div class="spec-item"><span class="spec-label">Format</span><span class="spec-value">Vertical 9:16</span></div><div class="spec-item"><span class="spec-label">Length</span><span class="spec-value">30 - 60 seconds</span></div><div class="spec-item"><span class="spec-label">Voiceover</span><span class="spec-value">Professional VO - all three</span></div><div class="spec-item"><span class="spec-label">Footage</span><span class="spec-value">All new - nothing reused</span></div><div class="spec-item"><span class="spec-label">Distribution</span><span class="spec-value">Meta Lead Gen + Organic Social</span></div></div>
  <p>The core emotional driver for this audience is <strong>reassurance</strong>. These parents aren't looking to be impressed they're looking to feel certain. Happy children. Caring staff. A warm, light, safe environment. The right decision. Our job is to deliver that feeling in under 60 seconds, three different ways.</p>
  <p>Messaging and visual approach builds on what has worked in previous Northshore kindy campaigns. Three distinct sentiments ensure Meta's algorithm has genuinely differentiated creative to work with not three versions of the same video.</p>
  <div class="sentiment-grid">
    <div class="sentiment-card"><span class="sentiment-num">Sentiment B1</span><h4>The Programs</h4><p>Leads with the new 4-day stream. Makes clear the 3-day and 5-day options also exist. Gives parents the practical information they need with an emotional underpinning of flexibility and care.</p></div>
    <div class="sentiment-card"><span class="sentiment-num">Sentiment B2</span><h4>The Location</h4><p>Addresses low geographic awareness. Set back from the road, tucked inside Shorehaven Estate many locals still don't know the school is there. Discovery-focused, warm and inviting.</p></div>
    <div class="sentiment-card"><span class="sentiment-num">Sentiment B3</span><h4>The Methodology</h4><p>Early learning philosophy and approach. How Northshore thinks about this age group and what it means to get those years right. For the parent who wants to understand the 'why'.</p></div>
  </div>
  <div class="campaign-divider"></div>

  <div class="campaign-header"><div class="campaign-num">C</div><div class="campaign-title-block"><span class="campaign-tag">Campaign C - Year 7 Intake</span><h2>Year 7 Enrolment Campaign</h2><p>Three short-form vertical ads targeting parents of children approaching high school. The Year 7 transition is the critical decision point between public and private even for K-12 schools.</p></div></div>
  <div class="spec-grid"><div class="spec-item"><span class="spec-label">Videos</span><span class="spec-value">3 x Short-Form Ads</span></div><div class="spec-item"><span class="spec-label">Format</span><span class="spec-value">Vertical 9:16</span></div><div class="spec-item"><span class="spec-label">Length</span><span class="spec-value">30 - 60 seconds</span></div><div class="spec-item"><span class="spec-label">Voiceover</span><span class="spec-value">Professional VO - all three</span></div><div class="spec-item"><span class="spec-label">Footage</span><span class="spec-value">All new - nothing reused</span></div><div class="spec-item"><span class="spec-label">Distribution</span><span class="spec-value">Meta Lead Gen + Organic Social</span></div></div>
  <p>These parents are navigating a fundamentally different set of concerns to kindy parents. They're asking harder questions: Is this school well-managed? Will my child be known here, not just numbered? What happens when things go wrong? And is there enough opportunity to keep them engaged through six years of secondary school?</p>
  <div style="background:var(--dark4);padding:24px 32px;margin-bottom:32px;border-left:3px solid rgba(255,255,255,0.1);"><p style="margin:0;font-size:13px;"><strong>A note on messaging:</strong> These videos never use the word "bullying." Instead, we demonstrate school culture confident, happy students, visible pastoral care, staff who know their students by name and allow parents to arrive at that reassurance themselves. Implied, never stated.</p></div>
  <div class="sentiment-grid">
    <div class="sentiment-card"><span class="sentiment-num">Sentiment C1</span><h4>Culture, Behaviour &amp; Pastoral Care</h4><p>Safe environment, school culture, teacher accessibility, the CHARIS framework in action. Reassurance that this is a place where your child will be seen, supported, and genuinely cared for.</p></div>
    <div class="sentiment-card"><span class="sentiment-num">Sentiment C2</span><h4>Breadth of Opportunity</h4><p>Camps, excursions, the CAS programme, extracurricular activities, The Rite Journey, academic and vocational pathways. The full picture of what six years here can look like.</p></div>
    <div class="sentiment-card"><span class="sentiment-num">Sentiment C3</span><h4>Location</h4><p>Same discovery logic as the kindy location video many families considering Year 7 are still unaware of the school's existence. Close to home, close to the coast, closer than you think.</p></div>
  </div>
  <div class="campaign-divider"></div>

  <div class="campaign-header"><div class="campaign-num">D</div><div class="campaign-title-block"><span class="campaign-tag">Campaign D - Year 11/12 Retention</span><h2>Senior School Retention Campaign</h2><p>Two talking-head led videos modelled on our successful Mundaring Christian College pathway campaign. Targeting the existing Year 10 cohort keeping them at Northshore through to graduation.</p></div></div>
  <div class="spec-grid"><div class="spec-item"><span class="spec-label">Videos</span><span class="spec-value">2 x Campaign Videos</span></div><div class="spec-item"><span class="spec-label">Format</span><span class="spec-value">Vertical 9:16</span></div><div class="spec-item"><span class="spec-label">Length</span><span class="spec-value">~90 seconds each</span></div><div class="spec-item"><span class="spec-label">Voiceover</span><span class="spec-value">None - teachers carry it</span></div><div class="spec-item"><span class="spec-label">Footage</span><span class="spec-value">90% new / 10% existing</span></div><div class="spec-item"><span class="spec-label">Distribution</span><span class="spec-value">Meta (existing community) + Organic</span></div></div>
  <div class="two-col"><div>
    <p>Schools typically experience significant drop-off at the Year 10 to 11 transition as families consider specialist colleges. These videos exist to demonstrate clearly and compellingly that every pathway a student might need is already right here. No need to leave.</p>
    <p>Modelled directly on the <strong>Mundaring Christian College pathway campaign</strong> produced by Monday Media in 2025. No voiceover the right teachers, speaking naturally on camera, do all the work. Warm, informative, and specific.</p>
    <p><strong>On-camera talent:</strong> Jethro Sobejko (Head of Secondary) plus a careers/vocational pathways staff member to be confirmed at pre-production.</p>
  </div><div>
    <div class="card"><div class="card-title">Video D1 - ATAR Pathways</div><p>English, Mathematics (Specialist, Methods, Applications), Chemistry, Physics, Human Biology, Psychology, Economics, Geography, Modern History, PE Studies, Visual Arts, Music, Drama, Media Production, Engineering Studies, ECU University Preparation. The message: you can get where you want to go without leaving.</p></div>
    <div class="card" style="margin-top:16px;"><div class="card-title">Video D2 - General &amp; Vocational Pathways</div><p>General courses across all learning areas, Certificate II Workplace Skills, Certificate III Music Performance, Certificate III Business, VET Delivered to Secondary Schools, Workplace Learning, Swan Online. The message: whatever your path, we have it covered.</p></div>
  </div></div>
</section>

<!-- PRODUCTION OVERVIEW (Section 04) -->
<section class="section" id="production">
  <span class="section-num">04 - Production Overview</span>
  <h2 class="section-title">Cinema-Grade.<br><span>Every Time.</span></h2>
  <div class="section-rule"></div>
  <p class="section-subtitle">We shoot on cinema-grade cameras, bring award-winning experience to every edit, and approach each project with fresh creative thinking. This is what that looks like in practice.</p>

  <div class="equipment-grid">
    <div class="equip-item"><span class="equip-icon">&#127909;</span><div class="equip-title">DJI Ronin 4D Cinema Camera</div><div class="equip-desc">Professional 6K filming with 4-axis active stabilisation. Monday Media is one of only two agencies in WA using this camera.</div></div>
    <div class="equip-item"><span class="equip-icon">&#128681;</span><div class="equip-title">Drone Cinematography</div><div class="equip-desc">Latest drone technology operated by our registered, in-house pilots. Critical for campus aerials and the Stage 4 update pass.</div></div>
    <div class="equip-item"><span class="equip-icon">&#127908;</span><div class="equip-title">Studio Grade Audio</div><div class="equip-desc">32-bit float recording with directional microphones. Every talking head sounds as good as it looks.</div></div>
    <div class="equip-item"><span class="equip-icon">&#128161;</span><div class="equip-title">Professional Lighting</div><div class="equip-desc">Studio-grade lighting setups for all interviews and talking head sequences. Consistent, polished, broadcast-quality.</div></div>
    <div class="equip-item"><span class="equip-icon">&#127916;</span><div class="equip-title">Two Videographers</div><div class="equip-desc">Every shoot is staffed by two highly experienced videographers, enabling simultaneous capture across multiple angles and environments.</div></div>
    <div class="equip-item"><span class="equip-icon">&#127902;</span><div class="equip-title">360 Action Camera</div><div class="equip-desc">Immersive footage with full panoramic capability ideal for camp sequences, outdoor activities, and moments of energy.</div></div>
    <div class="equip-item"><span class="equip-icon">&#9201;</span><div class="equip-title">Hyperlapse</div><div class="equip-desc">Seamless motion sequences that bring the campus to life. Particularly effective for showcasing the scale and energy of the school day.</div></div>
    <div class="equip-item"><span class="equip-icon">&#128421;</span><div class="equip-title">Post-Production</div><div class="equip-desc">Industry-leading editing, colour grading, sound design, and motion graphics. Professional licensed music beds included on all productions.</div></div>
  </div>

  <div class="two-col" style="margin-top:56px;">
    <div>
      <h3 style="font-size:18px;font-weight:700;color:var(--white);margin-bottom:16px;">Always Included</h3>
      <div class="card"><div class="card-title">Professional Colour Grading</div><p>Every video is colour graded to a consistent, cinematic standard.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">Licensed Music Beds</div><p>Perpetual music licences in Northshore's name. No ongoing fees or third-party claims.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">Sound Design</div><p>Full audio mix, ambient sound, and professional VO integration where applicable.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">2 Rounds of Minor Revisions</div><p>Included per video, within the agreed concept. Music bed, VO script, and student permission edits are separate.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">Crew &amp; Shoot Structure</div><p><strong>Main shoot:</strong> 2 videographers, 2 x 6-hour sessions on campus.<br><strong>Stage 4 update:</strong> 1 videographer, approximately 2 hours.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">Pre-Production Support</div><p>Monday Media will develop talking points for on-camera teacher interviews and work with the school to prepare a detailed filming schedule in advance of the shoot days.</p></div>
    </div>
    <div>
      <h3 style="font-size:18px;font-weight:700;color:var(--white);margin-bottom:16px;">Ownership &amp; Usage</h3>
      <p>All completed video files become the property of Northshore Christian Grammar School upon delivery. Files may be published on web and social platforms without restriction.</p>
      <p>Raw footage remains the intellectual property of Monday Media. Northshore may not remaster or re-edit completed files through third parties. Monday Media may not realise commercial profit from raw footage except through future remastering work commissioned by the school.</p>
      <div class="pink-card" style="margin-top:24px;"><h4>Raw Footage Transfer (Optional)</h4><p>Transfer of all raw footage with perpetual IP rights is available as an optional add-on. Pricing based on total data volume. Ask us for details.</p></div>
    </div>
  </div>
</section>

<!-- META CAMPAIGN (Section 05) -->
<section class="section section-alt" id="meta">
  <span class="section-num">05 - Meta Campaign &amp; Lead Management</span>
  <h2 class="section-title">Leads. Delivered<br><span>Instantly.</span></h2>
  <div class="section-rule"></div>
  <p class="section-subtitle">The campaign videos are only part of the equation. Monday Media will set up and manage the full Meta lead generation campaigns for a 3-month period from targeting and creative deployment through to instant lead delivery directly into the school's hands.</p>

  <div class="meta-flow">
    <div class="flow-step"><div class="flow-badge">Setup</div><h4>Campaign Build</h4><p>Audience targeting, ad set structure, lead form creation, pixel configuration</p></div>
    <div class="flow-step"><div class="flow-badge">Launch</div><h4>Go Live</h4><p>All three campaigns deployed with differentiated creative per sentiment</p></div>
    <div class="flow-step"><div class="flow-badge">Leads</div><h4>Instant Delivery</h4><p>Leads captured via Meta forms, delivered in real time via Zapier to as many individual NCGS email addresses as nominated (e.g. Stuart + Angelique)</p></div>
    <div class="flow-step"><div class="flow-badge">Optimise</div><h4>Ongoing Management</h4><p>Continuous creative testing, budget optimisation, and audience refinement over the 3-month management period</p></div>
    <div class="flow-step"><div class="flow-badge">Report</div><h4>3-Month ROAS Report</h4><p>A detailed return-on-ad-spend focused report at the 3-month mark. No vanity metrics; no reach or view counts. Leads, cost per lead, and conversion quality only.</p></div>
  </div>

  <div class="two-col" style="margin-top:16px;">
    <div>
      <div class="callout">
        <h3>The Zapier Integration</h3>
        <p>When a prospective parent fills out a lead form on Meta, their details are delivered instantly to as many individual school email addresses as Northshore nominates (for example, Stuart and Angelique) no waiting, no manual downloading, no leads going cold in a spreadsheet.</p>
        <p>This is what separates a professional lead generation campaign from a boosted post. Speed matters enormously in enrolment conversion.</p>
      </div>
    </div>
    <div>
      <h3 style="font-size:18px;font-weight:700;color:var(--white);margin-bottom:20px;">What's Managed</h3>
      <div class="card"><div class="card-title">Full Campaign Setup</div><p>Audience building, creative deployment, lead form design, pixel and conversion tracking, Zapier integration to nominated school email addresses.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">3-Month Management</div><p>Active monitoring, A/B creative testing across the three sentiments per campaign, budget allocation adjustments over the full 3-month period.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">ROAS-Focused Reporting</div><p>A detailed report at the 3-month mark focused exclusively on return on ad spend: leads generated, cost per lead, and conversion quality. No vanity metrics such as reach or view counts.</p></div>
      <div class="card" style="margin-top:12px;"><div class="card-title">Ad Spend</div><p>Ad spend is billed directly to the school's Meta account. Monday Media's management fee is separate and covers all of the above.</p></div>
    </div>
  </div>
</section>

<!-- STAGE 4 PROMISE (Section 06) -->
<section class="section" id="stage4">
  <span class="section-num">06 - The Stage 4 Promise</span>
  <h2 class="section-title">Future-Proof.<br><span>Built In.</span></h2>
  <div class="section-rule"></div>
  <div class="stage4-box">
    <h3>The Stage 4 Update Pass</h3>
    <p>Northshore's Stage 4 campus development is well underway. The oval is complete. The remaining buildings library, classrooms, student services, gymnasium and community centre are on track for completion by end of 2025/26.</p>
    <p>Once construction is complete, Monday Media will return to campus for a dedicated update shoot. New drone footage of the completed campus. New internals of the finished buildings. One-for-one shot swaps applied across the relevant videos.</p>
    <p>No new talking heads. No timing changes. No music changes. Clean, surgical updates that ensure every video reflects the finished school not a school mid-construction.</p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-top:40px;">
      <div style="background:rgba(56,195,220,0.1);padding:24px 20px;text-align:center;"><span style="font-size:28px;font-weight:800;color:var(--cyan);display:block;margin-bottom:6px;">~2hrs</span><span style="font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">On-site filming</span></div>
      <div style="background:rgba(56,195,220,0.1);padding:24px 20px;text-align:center;"><span style="font-size:28px;font-weight:800;color:var(--cyan);display:block;margin-bottom:6px;">1 day</span><span style="font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Total time (incl. edit)</span></div>
      <div style="background:rgba(56,195,220,0.1);padding:24px 20px;text-align:center;"><span style="font-size:28px;font-weight:800;color:var(--cyan);display:block;margin-bottom:6px;">1-for-1</span><span style="font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Shot replacements</span></div>
      <div style="background:rgba(56,195,220,0.1);padding:24px 20px;text-align:center;"><span style="font-size:28px;font-weight:800;color:var(--cyan);display:block;margin-bottom:6px;">Included</span><span style="font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">In this proposal</span></div>
    </div>
  </div>
</section>

<!-- DELIVERABLES (Section 07) -->
<section class="section section-alt" id="deliverables">
  <span class="section-num">07 - Deliverables Summary</span>
  <h2 class="section-title">Everything You're<br><span>Getting.</span></h2>
  <div class="section-rule"></div>
  <table class="deliverables-table"><thead><tr><th>Video</th><th>Format</th><th>Length</th><th>Voiceover</th><th>Footage Mix</th><th>Distribution</th></tr></thead><tbody>
    <tr><td>A - Main Promo Video</td><td>Landscape 16:9</td><td>2 min</td><td>None</td><td>80% new / 20% existing</td><td><span class="tag">Website</span></td></tr>
    <tr><td>B1 - Kindy: The Programs</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>B2 - Kindy: The Location</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>B3 - Kindy: The Methodology</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>C1 - Year 7: Culture &amp; Pastoral Care</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>C2 - Year 7: Breadth of Opportunity</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>C3 - Year 7: Location</td><td>Vertical 9:16</td><td>30-60 sec</td><td>Professional</td><td>All new</td><td><span class="tag">Meta Lead Gen</span> <span class="tag">Organic</span></td></tr>
    <tr><td>D1 - Year 11/12: ATAR Pathways</td><td>Vertical 9:16</td><td>~90 sec</td><td>None</td><td>90% new / 10% existing</td><td><span class="tag">Meta</span> <span class="tag">Organic</span></td></tr>
    <tr><td>D2 - Year 11/12: General &amp; VET Pathways</td><td>Vertical 9:16</td><td>~90 sec</td><td>None</td><td>90% new / 10% existing</td><td><span class="tag">Meta</span> <span class="tag">Organic</span></td></tr>
    <tr style="border-top:2px solid rgba(56,195,220,0.3);"><td><strong>Stage 4 Update Pass</strong></td><td>All formats</td><td>-</td><td>-</td><td>New drone + internals</td><td><span class="tag" style="background:rgba(56,195,220,0.2);">Included</span></td></tr>
  </tbody></table>
  <div style="margin-top:32px;display:flex;gap:32px;align-items:center;">
    <div style="background:var(--dark3);padding:24px 32px;flex:1;text-align:center;border-top:3px solid var(--cyan);"><span style="font-size:42px;font-weight:900;color:var(--cyan);display:block;letter-spacing:-0.03em;">9</span><span style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Videos Delivered</span></div>
    <div style="background:var(--dark3);padding:24px 32px;flex:1;text-align:center;border-top:3px solid var(--cyan);"><span style="font-size:42px;font-weight:900;color:var(--cyan);display:block;letter-spacing:-0.03em;">4</span><span style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Campaigns Covered</span></div>
    <div style="background:var(--dark3);padding:24px 32px;flex:1;text-align:center;border-top:3px solid var(--cyan);"><span style="font-size:42px;font-weight:900;color:var(--cyan);display:block;letter-spacing:-0.03em;">1</span><span style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Included Update Pass</span></div>
    <div style="background:var(--dark3);padding:24px 32px;flex:1;text-align:center;border-top:3px solid var(--pink);"><span style="font-size:42px;font-weight:900;color:#ff4d7a;display:block;letter-spacing:-0.03em;">T2</span><span style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--subtle);">Term 2 Production Start</span></div>
  </div>
</section>

<!-- QUOTATION (Section 08) -->
<section class="quote-section" id="quote">
  <span class="section-num">08 - Quotation</span>
  <h2 class="section-title">The<br><span>Investment.</span></h2>
  <div class="section-rule"></div>
  <div class="quote-box" style="margin-top:40px;">
    <div class="quote-box-header">
      <div class="quote-box-meta">
        <div class="meta-row"><span class="meta-row-label">FAO</span><span class="meta-row-value">Angelique Botha | Marketing &amp; Communications Specialist</span></div>
        <div class="meta-row"><span class="meta-row-label">Organisation</span><span class="meta-row-value">Northshore Christian Grammar School</span></div>
        <div class="meta-row"><span class="meta-row-label">Date</span><span class="meta-row-value">April 2026</span></div>
        <div class="meta-row"><span class="meta-row-label">Quote No.</span><span class="meta-row-value" style="font-family:monospace;font-size:13px;">NCGS 01 2026</span></div>
      </div>
      <div class="quote-word">QUOTE</div>
    </div>

    <div class="line-item"><div><div class="line-item-title">Campaign A - Main Promotional Video</div><ul>
      <li>1 x 2-minute landscape main promo video</li><li>3 x on-camera talking heads (Principal + 2 staff)</li><li>80% new footage / 20% existing (2024+ supplied by school)</li><li>Colour grading, licensed music, sound design</li><li>2 rounds of minor revisions</li>
    </ul></div><div><div class="line-price">$3,700</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="line-item"><div><div class="line-item-title">Campaign B - Kindy Enrolment (3 x Videos)</div><ul>
      <li>3 x short-form vertical ads (30-60 sec each)</li><li>Professional voiceover on all three</li><li>3 distinct sentiments: Programs / Location / Methodology</li><li>All new footage - nothing reused</li><li>Colour grading, licensed music, optimised for Meta lead gen</li><li>2 rounds of minor revisions per video</li><li>Priced on the basis that Campaign A proceeds (covers majority of filming overheads)</li>
    </ul></div><div><div class="line-price">$2,900</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="line-item"><div><div class="line-item-title">Campaign C - Year 7 Intake (3 x Videos)</div><ul>
      <li>3 x short-form vertical ads (30-60 sec each)</li><li>Professional voiceover on all three</li><li>3 distinct sentiments: Culture &amp; Pastoral Care / Breadth of Opportunity / Location</li><li>All new footage - nothing reused</li><li>Colour grading, licensed music, optimised for Meta lead gen</li><li>2 rounds of minor revisions per video</li><li>Priced on the basis that Campaign A proceeds (covers majority of filming overheads)</li>
    </ul></div><div><div class="line-price">$2,900</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="line-item"><div><div class="line-item-title">Campaign D - Year 11/12 Retention (2 x Videos)</div><ul>
      <li>2 x talking head led vertical videos (~90 sec each)</li><li>No voiceover - on-camera staff carry the narrative</li><li>Jethro Sobejko (Head of Secondary) + careers/VET staff TBC</li><li>90% new footage / 10% existing</li><li>Video D1: ATAR Pathways | Video D2: General &amp; Vocational Pathways</li><li>2 rounds of minor revisions per video</li>
    </ul></div><div><div class="line-price">$3,200</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="line-item"><div><div class="line-item-title">Stage 4 Update Pass - Included</div><ul>
      <li>Return shoot once Stage 4 buildings are complete (anticipated end of 2025/26)</li><li>~2 hours on-site filming: new drone footage + new building internals</li><li>One-for-one shot swaps across applicable videos</li><li>No changes to talking heads, timing, voiceover or music</li><li>Total Monday Media time: no more than one full day (filming + editing)</li>
    </ul></div><div><div class="line-price" style="color:var(--cyan);">Included</div></div></div>

    <div class="line-item"><div><div class="line-item-title">Meta Ads Management (3 Months)</div><ul>
      <li>Full campaign setup: audience targeting, lead forms, pixel, Zapier integration to nominated school email addresses</li><li>Instant lead delivery to school via Zapier automation</li><li>3-month setup, management and optimisation period</li><li>Detailed ROAS-focused report at the 3-month mark (no vanity metrics)</li><li>Ad spend billed directly to school's Meta account (separate to this fee)</li>
    </ul></div><div><div class="line-price">$1,000</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="line-item line-item-optional"><div><div class="line-item-title" style="color:#ff4d7a;">Raw Footage Transfer - Optional Add-On</div><ul>
      <li>Transfer of all raw footage including all perpetual IP rights</li><li>Pricing based on total data volume (base rate + increments for 300-600GB and 600GB-1TB)</li>
    </ul></div><div><div class="line-price" style="color:#ff4d7a;">POA</div><div class="line-price-tbc">+ GST</div></div></div>

    <div class="quote-total-row">
      <span class="quote-total-label">Total Production Investment</span>
      <span class="quote-total-amount">$13,700 + GST</span>
    </div>
    <div class="gst-note">All prices exclude GST &nbsp;|&nbsp; Quote valid for 90 days</div>
  </div>

  <!-- T&C -->
  <div style="margin-top:64px;">
    <h3 style="font-size:20px;font-weight:700;color:var(--white);margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid rgba(255,255,255,0.06);position:relative;">
      Terms &amp; Conditions
      <span style="position:absolute;bottom:-2px;left:0;width:48px;height:2px;background:var(--cyan);display:block;"></span>
    </h3>
    <div class="tc-grid">
      <div class="tc-row"><div class="tc-row-label">Quote &amp; Payment</div><div class="tc-row-body">All projects are quoted per job. A 50% upfront payment is required to commence work, with the remaining 50% due upon final approval. Quotes are valid for 90 days.</div></div>
      <div class="tc-row"><div class="tc-row-label">Design &amp; Revisions</div><div class="tc-row-body">Promotional videos are both technical and artistic works. Edits are limited to 2 minor rounds of revision within the agreed concept. Changes beyond this scope are charged at $110 + GST per hour. Voiceover script changes, music bed updates, and student permission-related edits are excluded from the revision allowance.</div></div>
      <div class="tc-row"><div class="tc-row-label">Ownership &amp; Usage</div><div class="tc-row-body">Final video files become the property of Northshore Christian Grammar School upon delivery. Raw footage remains the intellectual property of Monday Media. Completed videos may not be altered or remastered by the client or commissioned to third parties.</div></div>
      <div class="tc-row"><div class="tc-row-label">Publishing Rights</div><div class="tc-row-body">All assets will be suitable for web and social media publishing. Music licences are perpetual and held in the school's name.</div></div>
      <div class="tc-row"><div class="tc-row-label">Campaign A Dependency</div><div class="tc-row-body">The pricing for Campaigns B, C, and D is quoted on the basis that Campaign A proceeds, as Campaign A covers the majority of shared filming overheads (crew mobilisation, equipment, and primary shoot days). If Campaign A does not proceed, pricing for Campaigns B, C, and D will need to be re-quoted to account for the additional production overhead.</div></div>
    </div>
  </div>
</section>

<!-- CLOSING -->
<section class="closing">
  <div class="closing-content">
    <h2>Ready to<br><span>begin.</span></h2>
    <p>We're genuinely excited to get back on campus and bring this campaign to life. After eight years of working together, we know exactly what Northshore is capable of and we can't wait to show the next generation of families why this school is something special.</p>
    <div class="contact-block">
      <div class="contact-item"><label>Phone</label><a href="tel:0447276379">0447 276 379</a></div>
      <div class="contact-item"><label>Email</label><a href="mailto:info@mondaymedia.com.au">info@mondaymedia.com.au</a></div>
      <div class="contact-item"><label>Website</label><a href="https://www.mondaymedia.com.au" target="_blank">www.mondaymedia.com.au</a></div>
      <div class="contact-item"><label>Address</label><span>1b/25 Delage St, Joondalup WA</span></div>
    </div>
  </div>
  <img class="closing-logo" src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAE7B9ADASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAgJBgcDBAUCAf/EAGYQAAEDAgMDBQgJDwYKCAYDAQABAgMEBQYHEQgSIRMxQVFhCRQiN3F1gbMVGDJCUlaRlLIWFyM1NjhXYnJ0gpKhsdEzQ2OVotIkR1NUc4WTtMTTJVVndoOlwcI0RKPU5PBlw+Hx/8QAHAEBAAMBAQEBAQAAAAAAAAAAAAUGBwQCAwEI/8QAOREBAAEBBQILBQcFAAAAAAAAAAECAwQFEXEGMhITFDEzNDVRUpGxByEiQWEVFhdTVKLCgYLB0eL/2gAMAwEAAhEDEQA/AIZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbPc0ftHjf85o/oykvyIHc0ftHjf85o/oykvwAAAAAAQz7pp/i+/wBZf8KTMIZ900/xff6y/wCFAhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" alt="Monday Media">
</section>

<script>
  const nav = document.getElementById('stickyNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.8) { nav.classList.add('visible'); } else { nav.classList.remove('visible'); }
  });
</script>
</body>
</html>`;

export default function Proposal() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      doc.open();
      doc.write(HTML_CONTENT);
      doc.close();
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Proposal"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}